import { Request, Response } from 'express';
import Joi from 'joi';
import validator from '../validations/Validator';
import { StatusCode } from '../utils/StatusCode';
import User from '../models/User';
import Product from "../models/Product";
import Cart from '../models/Cart';
import Order from '../models/Order';
import axios from 'axios'
import { Buffer } from 'buffer';
import Developer, { IDeveloper } from '../models/Developer';
import env from '../config/env.config';

const checkoutSchema = {
    customer_id: Joi.string().required(),
    products_id: Joi.array().required().min(1),
    bank: Joi.string().required(),
    customer_name: Joi.string().required(),
    customer_email: Joi.string().email().required(),
}

/* 
    Status 0 = Success dan sudah masuk ke saldo developer
    Status 1 = Success
    Status 2 = Canceled
    Status 3 = Pending / Not Paid
*/
const paymentSchema = {
    invoice: Joi.string().required(),
}

const SERVER_KEY: string = env('MIDTRANS_SERVER_KEY');

export async function checkoutOrder(req : Request, res : Response) {
    const data: any = req.body

    const validation = await validator(checkoutSchema, data);
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    data.bank = data.bank.toLowerCase();

    if(data.bank != "permata" && data.bank != "bca" && data.bank != "bni" && data.bank != "bri"){
        return res.status(StatusCode.BAD_REQUEST).json({ 
            message: "Invalid bank name",
        })
    }

    const developer: IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper

    const user: any = await User.checkCustomerID(data.customer_id, developer.developer_id)
    if (user == " ") return res.status(StatusCode.NOT_FOUND).json({ message: "User id is not registered"})

    let listCheckout: any[] = []
    let qty: number[] = []
    let total: number = 0
    let tempInv = '-';

    try {
        for(let i = 0; i < data.products_id.length; i++) {
            const product = await Product.fetchById(req.body.developer, data.products_id[i])
            if(!product) return res.status(StatusCode.BAD_REQUEST).json({ message: `${data.products_id[i]} is not registered`})
            if(product.status == 0) return res.status(StatusCode.BAD_REQUEST).json({ message: `${product.name} is not available`})
            
            const cart = await Cart.checkDuplicateEntry(user.user_id, data.products_id[i])
            if(!cart) return res.status(StatusCode.BAD_REQUEST).json({ message: `${product.name} is not in user's cart`})
    
            if(cart.quantity > product.stock) return res.status(StatusCode.BAD_REQUEST).json({ message: `Insufficient Stock on product ${product.name}. Checkout cancelled`})
            
            listCheckout[i] = {
                name: product.name,
                quantity: cart.quantity,
                subtotal: cart.quantity*product.price
            } as {name: string, quantity: number, subtotal: number}

            qty.push(cart.quantity)
            
            total += cart.quantity * product.price
        }

        for(let i = 0; i < data.products_id.length; i++){
            const cart = await Cart.checkDuplicateEntry(user.user_id, data.products_id[i])

            if(cart){
                // SUBTRACT STOCK
                await Product.subtractStock(data.products_id[i], cart.quantity)
        
                //DELETE CART
                await Cart.delete(user.user_id, data.products_id[i])
            }
        }

        const Invoice = await Order.create(user.user_id, total, data.products_id, qty, data.bank);
        tempInv = Invoice;
        const order = await Order.getOrderByInvoice(Invoice)

        const options = {
            method: 'POST',
            url: 'https://api.sandbox.midtrans.com/v2/charge',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Basic ' + Buffer.from(SERVER_KEY).toString("base64")
            },
            data: {
                payment_type: 'bank_transfer',
                transaction_details: {
                    order_id: Invoice,
                    gross_amount: order?.total
                },
                bank_transfer: {bank: data.bank},
                customer_details: {
                    first_name: data.customer_name,
                    last_name: "",
                    email: data.customer_email,
                    phone: ""
                }
            }
        };

        axios.request(options).then(async response => {
            let va_number: string
            if (data.bank == "permata") {
                va_number = response.data.permata_va_number
            } else {
                va_number = response.data.va_numbers[0].va_number
            }
            await Order.setVANumber(Invoice, va_number)

            return res.status(StatusCode.CREATED).json({
                invoice: Invoice,
                bank: data.bank,
                va_number: va_number,
                transaction_status: "pending"
            })
        }).catch(err => {
            return res.status(StatusCode.INTERNAL_SERVER).json({ message: err.message })
        })
    } catch (error: any) {
        console.log(error.message);
        return res.status(StatusCode.INTERNAL_SERVER).json({
            message: "Internal server error"
        })
    }
}

export async function paymentOrder(req : Request, res : Response) {
    const data = req.body

    const validation = await validator(paymentSchema, data);
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    try {
        const developer: IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper
        const order = await Order.fetchOrderByDeveloperIdInvoice(developer.developer_id, data.invoice)

        if(order.length == 0){
            return res.status(StatusCode.NOT_FOUND).json({message: "Invalid invoice number"})
        }

        const options = {
            method: 'GET',
            url: `https://api.sandbox.midtrans.com/v2/${data.invoice}/status`,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Basic ' + Buffer.from(SERVER_KEY).toString("base64")
            }
        };

        axios.request(options).then(async response => {
            return res.status(StatusCode.OK).json({
                invoice: data.invoice,
                bank: order[0].bank,
                va_number: order[0].va_number,
                transaction_status: response.data.transaction_status,
            })
        }).catch(err => {
            return res.status(StatusCode.INTERNAL_SERVER).json(err.message)
        })
    } catch (error) {
        return res.status(StatusCode.INTERNAL_SERVER).json({
            message: "Internal Server Error"
        })
    }
}

export async function fetchOrders(req : Request, res : Response) {
    const data = req.body

    const developer: IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper
    const order = await Order.fetchAllOrderByDeveloperId(developer.developer_id)

    return res.status(StatusCode.OK).json(order)
}

export async function fetchOrderById(req : Request, res : Response) {
    const data = req.body
    const invoice = req.params.invoice

    const developer: IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper

    const detailOrder = await Order.fetchDetailOrder(developer.developer_id, invoice)

    if(detailOrder.length == 0) return res.status(StatusCode.NOT_FOUND).json({message: "Invalid invoice number"})

    return res.status(StatusCode.OK).json(detailOrder)
}

export async function fetchUserOrder(req : Request, res : Response) {
    const data = req.body
    const customer_id = req.params.customer_id

    const developer: IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper
    const user = await User.checkCustomerID(customer_id, developer.developer_id);
    if (user === ' ')  return res.status(StatusCode.NOT_FOUND).send({message:'User not found!'});

    return res.status(StatusCode.OK).json(await Order.fetchOrderByCustomer(developer.developer_id, customer_id))
}

export async function syncOrderStatus(req : Request, res : Response) {
    const {
        transaction_status,
        order_id
    } = req.body;

    if (!transaction_status || !order_id) return res.status(403).json({ message: `Forbidden` });

    let status = transaction_status === 'settlement' ? 1 : transaction_status === 'pending' ? 3 : 2;
    const order = await Order.getOrderByInvoice(order_id);

    if (order.status === 3 && status === 1) {
        const developer_id = await User.getDeveloperIdByUserId(order.user_id);

        await Developer.updateBalance(developer_id, parseInt((order.total * 0.9).toString())); // bussiness moidel 10% tax
        status = 0;
    }

    await Order.changeStatusOrder(order_id, status);

    return res.status(200).json({ message: `Ok` });
}

/*   
    {
        transaction_status: 'settlement',
        order_id: 'INV190520230004'
    }
*/