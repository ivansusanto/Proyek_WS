import { Request, Response } from 'express';
import validator from '../validations/Validator';
import Product from '../models/Product';
import Developer, { IDeveloper } from '../models/Developer';
import env from '../config/env.config';
import Joi from 'joi';
import fs from 'fs';
import { StatusCode } from '../utils/statusCode';

const addProductSchema = {
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required().min(1),
    stock: Joi.number().min(1),
    image: Joi.any().required()
}

const updateProductSchema = {
    product_id: Joi.string().required(),
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number().min(1),
    stock: Joi.number().min(1),
    image: Joi.any(),
    status: Joi.number().min(0).max(1)
}

export async function addProduct(req : Request, res : Response) {
    const data = req.body;

    const validation = await validator(addProductSchema, data);
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const developer:IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper
    const newProduct = await Product.create(data, developer.developer_id);
    newProduct.image = env('PREFIX_URL') + '/api/assets/' + newProduct.image;

    return res.status(StatusCode.CREATED).json({
        message: 'Success add product',
        data: newProduct
    });
}

export async function fetchProduct(req : Request, res : Response) {
    const productResult = await Product.get(req.body.developer)
    for (const element of productResult) {
        element.image = env('PREFIX_URL') + '/api/assets/' + element.image;
    }

    return res.status(StatusCode.OK).json({
        message: 'OK',
        data: productResult
    });
}

export async function fetchProductById(req : Request, res : Response) {
    const productResult = await Product.fetchById(req.body.developer, req.params.product_id);

    if (!productResult) return res.status(StatusCode.FORBIDDEN).json({ message: 'Forbidden' });

    productResult.image = env('PREFIX_URL') + '/api/assets/' + productResult.image;
    return res.status(StatusCode.OK).json({
        message: 'OK',
        data: productResult
    });
}

export async function updateProduct(req : Request, res : Response) {
    const data = {
        ...req.params,
        ...req.body
    };

    const validation = await validator(updateProductSchema, data);
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    delete req.body.developer;
    if (data.price) req.body.price = parseInt(data.price);
    if (data.stock) req.body.stock = parseInt(data.stock);
    if (data.status) req.body.status = parseInt(data.status);

    const tempProduct = await Product.fetchById(data.developer, data.product_id);
    if (tempProduct) fs.unlinkSync('./uploads/' + tempProduct.image);

    const updatedProduct = await Product.update(req.body, data.developer, data.product_id);
    if (!updatedProduct) return res.status(StatusCode.FORBIDDEN).json({ message: 'Forbidden' });

    updatedProduct.image = env('PREFIX_URL') + '/api/assets/' + updatedProduct.image;
    return res.status(StatusCode.OK).json({
        message: 'Success update product',
        data: updatedProduct
    });
}