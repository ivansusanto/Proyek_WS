import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import Joi from 'joi';
import validator from '../validations/Validator';
import { StatusCode } from '../helpers/statusCode';
import User from '../models/User';
import Product from "../models/Product"
import Cart from '../models/Cart';
import Order from '../models/Order';

const checkoutSchema = {
    customer_id: Joi.string().required(),
    products_id: Joi.array().required()
}

export async function checkoutOrder(req : Request, res : Response) {
    const data: any = req.body

    const validation = await validator(checkoutSchema, data);
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    try {
        const user: any = await User.checkCustomerID(data.customer_id, data.developer_id)
        if(user == " ") return res.status(StatusCode.BAD_REQUEST).json({ message: "User id is not registered"})
    
        let listCheckout: any[] = []
        let qty: number[] = []
        let total: number = 0
    
        for(let i = 0; i < data.products_id.length; i++) {
            const product = await Product.fetchById(req.body.developer, data.products_id[i])
            if(!product) return res.status(StatusCode.BAD_REQUEST).json({ message: `${data.products_id[i]} is not registered`})
            if(product.status == 0) return res.status(StatusCode.BAD_REQUEST).json({ message: `${product.name} is not available`})
            
            const cart = await Cart.checkDuplicateEntry(user.user_id, data.products_id[i])
            if(!cart) return res.status(StatusCode.BAD_REQUEST).json({ message: `${product.name} is not in user's cart`})
    
            if(cart.quantity > product.stock) return res.status(StatusCode.BAD_REQUEST).json({ message: `Insufficient Stock on product ${product.name}`})
            
            listCheckout[i] = {
                name: product.name,
                quantity: cart.quantity,
                subtotal: cart.quantity*product.price
            } as {name: string, quantity: number, subtotal: number}

            qty.push(cart.quantity)
            total += cart.quantity*product.price
        }
    
        const Invoice = await Order.create(user.user_id, total, data.products_id, qty)

        return res.status(StatusCode.CREATED).json({
            Invoice: Invoice,
            listCheckout,
            Total: total
        })
    } catch (error: any) {
        return res.status(StatusCode.INTERNAL_SERVER).json({
            message: "Internal server error"
        })
    }
}

export async function paymentOrder(req : Request, res : Response) {
    
}

export async function fetchOrders(req : Request, res : Response) {
    
}

export async function fetchOrderById(req : Request, res : Response) {
    
}

export async function fetchUserOrder(req : Request, res : Response) {
    
}