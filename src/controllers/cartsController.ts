import { Request, Response } from 'express';
import validator from '../validations/Validator';
import Cart from '../models/Cart';
import User from '../models/User';
import Product from '../models/Product';
import Joi from 'joi';
import { StatusCode } from '../utils/statusCode';
import Developer, { IDeveloper } from '../models/Developer';

const addCartSchema = {
    customer_id: Joi.string().required(),
    product_id: Joi.string().required(),
    quantity: Joi.number().min(1).required()
}

const updateCartSchema = {
    quantity: Joi.number().min(1).required(),
    customer_id: Joi.string().required(),
    product_id: Joi.string().required().length(5)
}

const deleteCartSchema = {
    customer_id: Joi.string().required(),
    product_id: Joi.string().required().length(5)
}

export async function addCart(req : Request, res : Response) {
    const data = req.body;
    const validation = await validator(addCartSchema, data)
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    const tempDeveloper = req.body.developer
    const developer:IDeveloper = await Developer.fetchByUsername(tempDeveloper) as IDeveloper
    const user = await User.checkCustomerID(data.customer_id, developer.developer_id);
    if (user===' ') return res.status(StatusCode.NOT_FOUND).send({message: `User not found!`});
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
        res.status(StatusCode.FORBIDDEN).send({ message: `${data.product_id} is not your product!`})
    }
}   

export async function fetchCart(req : Request, res : Response) {
    const customer_id = req.params.customer_id;
    const developer = req.body.developer;
    const user_cart = await Cart.getUserCart(customer_id, developer);
    if (user_cart === ' ') return res.status(StatusCode.NOT_FOUND).send({ message: `Cart not found` })
    res.status(StatusCode.OK).send(user_cart)
}

export async function updateCart(req : Request, res : Response) {
    const data = {
        ...req.body,
        ...req.params
    };
    const validation = await validator(updateCartSchema, data)
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    const tempDeveloper = req.body.developer
    const developer:IDeveloper = await Developer.fetchByUsername(tempDeveloper) as IDeveloper

    const user = await User.checkCustomerID(data.customer_id, developer.developer_id);
    if (user === ' ') return res.status(StatusCode.NOT_FOUND).send({message:'User not found!'});

    const check = await Cart.checkDuplicateEntry(user.user_id, data.product_id)
    const product = await Product.fetchById(developer.username, data.product_id)

    const checkOwner = await Cart.checkBefore(data.product_id, developer.developer_id)
    if(checkOwner){
        if(check){ 
            const newQuantity:number = parseInt(data.quantity);
            const updateCart = await Cart.update(user.user_id, data.product_id, newQuantity)
            return res.status(StatusCode.OK).send({
                cart_id: updateCart.cart_id,
                product_name: product?.name,
                quantity: newQuantity
            });
        } else {
            return res.status(StatusCode.BAD_REQUEST).send({ message: `${product?.name} is not in user's cart!`})
        }
    } else {
        res.status(StatusCode.FORBIDDEN).send({ message: `${data.product_id} is not your product!`})
    }
}

export async function deleteCart(req : Request, res : Response) {
    const {product_id, customer_id} = req.params;
    const data = req.body;

    const validation = await validator(deleteCartSchema, { product_id, customer_id })
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const tempDeveloper = req.body.developer
    const developer:IDeveloper = await Developer.fetchByUsername(tempDeveloper) as IDeveloper
    const user = await User.checkCustomerID(customer_id, developer.developer_id);
    if (user===' ') return res.status(StatusCode.NOT_FOUND).send({message:'User not found!'});
    const check = await Cart.checkDuplicateEntry(user.user_id, product_id)
    const product = await Product.fetchById(developer.username, product_id)
    const checkOwner = await Cart.checkBefore(product_id, developer.developer_id)
    if(checkOwner){
        if(check){ 
            await Cart.delete(user.user_id, product_id)
            return res.status(StatusCode.OK).send({
                cart_id: check.cart_id,
                product_name: product?.name,
                message: "Product has been removed from cart"
            });
        } else {
            return res.status(StatusCode.BAD_REQUEST).send({ message: `${product?.name} is not in user's cart!`})
        }
    } else {
        res.status(StatusCode.FORBIDDEN).send({ message: `${data.product_id} is not your product!`})
    }
}