import { Request, Response } from 'express';
import validator from '../validations/Validator';
import Product from '../models/Product';
import Developer from '../models/Developer';
import Joi from 'joi';

const addProductSchema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(1),
    stock: Joi.number().min(1),
    image: Joi.string().required()
}

export async function addProduct(req : Request, res : Response) {
    const data = req.body;

    const validation = await validator(addProductSchema, data);

    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const newProduct = await Product.create(req.body, await Developer.fetchByUsername(data.developer.username));

    return res.status(201).json(newProduct);
}

export async function fetchProduct(req : Request, res : Response) {
    
}

export async function fetchProductById(req : Request, res : Response) {
    
}

export async function updateProduct(req : Request, res : Response) {
    
}