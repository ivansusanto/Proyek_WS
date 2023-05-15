import { Request, Response } from 'express';
import validator from '../validations/Validator';
import Cart from '../models/Cart';
import User from '../models/User';
import Product from '../models/Product';
import Joi from 'joi';

const addCartSchema = {
    quantity: Joi.number().min(1).required()
}

export async function addCart(req : Request, res : Response) {
    const data = req.body;
    const validation = await validator(addCartSchema, data)
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    const developer = req.body.developer;
    const user = await User.returnUserIdByCustomerId(data.customer_id, developer.developer_id);
    const newCart = await Cart.create(data, user.user_id, data.product_id)
    const productName = await Product.fetchById(developer.username, data.product_id)
    res.status(201).send({
        cart_id: newCart.cart_id,
        product_name: productName,
        quantity: data.quantity
    });
}   

export async function fetchCart(req : Request, res : Response) {
    
}

export async function updateCart(req : Request, res : Response) {
    
}

export async function deleteCart(req : Request, res : Response) {
    
}