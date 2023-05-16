import { Request, Response } from 'express';
import validator from '../validations/Validator';
import Cart from '../models/Cart';
import User from '../models/User';
import Product from '../models/Product';
import Joi from 'joi';
import { StatusCode } from '../helpers/statusCode';

const addCartSchema = {
    customer_id: Joi.string().required(),
    product_id: Joi.string().required(),
    quantity: Joi.number().min(1).required()
}

export async function addCart(req : Request, res : Response) {
    const data = req.body;
    const validation = await validator(addCartSchema, data)
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const developer = req.body.developer
    const user = await User.checkCustomerID(data.customer_id, developer.developer_id);
    if (user===' ')  res.status(StatusCode.NOT_FOUND).send({message:'User not found'});

    const check = await Cart.checkDuplicateEntry(user.user_id, data.product_id)
    const product = await Product.fetchById(developer.username, data.product_id)
    const checkOwner = await Cart.checkBefore(data.product_id, developer.developer_id)
    if(checkOwner){
        if(check){ //sudah ada di dalam cart
            const newQuantity:number = check.quantity + parseInt(data.quantity);
            const updateCart = await Cart.update(user.user_id, data.product_id, newQuantity)
            res.status(StatusCode.OK).send({
                cart_id: updateCart.cart_id,
                product_name: product?.name,
                quantity: newQuantity
            });
        } else { //belum ada di dalam cart
            const newCart = await Cart.create(data, user.user_id, data.product_id)
            res.status(StatusCode.CREATED).send({
                cart_id: newCart.cart_id,
                product_name: product?.name,
                quantity: data.quantity
            });
        }
    } else {
        res.status(StatusCode.BAD_REQUEST).send({ message: "Product not registered"})
    }
}   

export async function fetchCart(req : Request, res : Response) {
    const user_id = req.params.user_id;
    const user_cart = await Cart.get(user_id);
    res.status(StatusCode.OK).send({ user_cart })
}

export async function updateCart(req : Request, res : Response) {
    
}

export async function deleteCart(req : Request, res : Response) {
    
}