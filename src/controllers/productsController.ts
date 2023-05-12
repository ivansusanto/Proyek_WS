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

const updateProductSchema = {
    product_id: Joi.string().required(),
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number().min(1),
    stock: Joi.number().min(1),
    image: Joi.string(),
    status: Joi.number().min(0).max(1)
}

export async function addProduct(req : Request, res : Response) {
    const data = req.body;

    const validation = await validator(addProductSchema, data);
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const newProduct = await Product.create(data, await Developer.fetchByUsername(data.developer.username));

    return res.status(201).json({
        message: 'Success add product',
        status: '201',
        data: newProduct
    });
}

export async function fetchProduct(req : Request, res : Response) {
    return res.status(200).json(await Product.get(req.body.developer.username));
}

export async function fetchProductById(req : Request, res : Response) {
    const fetchById = await Product.fetchById(req.body.developer.username, req.params.product_id);

    if (fetchById.length !== 0) return res.status(200).json(fetchById);
    return res.status(403).json({ message: 'Forbidden' });
}

export async function updateProduct(req : Request, res : Response) {
    const data = {
        ...req.params,
        ...req.body
    };

    const validation = await validator(updateProductSchema, data);
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    delete req.body.developer;
    if (data.price) req.body.price = parseInt(data.price);
    if (data.stock) req.body.stock = parseInt(data.stock);
    if (data.status) req.body.status = parseInt(data.status);

    const newProduct = await Product.update(req.body, data.developer.username, data.product_id);
    if (!newProduct) return res.status(403).json({ message: 'Forbidden' });
    return res.status(200).json({
        message: 'Success update product',
        status: '200',
        data: newProduct
    });
}