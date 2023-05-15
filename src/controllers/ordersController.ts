import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import Joi from 'joi';
import validator from '../validations/Validator';

const prisma = new PrismaClient();

const checkoutSchema = {
    customer_id: Joi.string().required(),
    products_id: Joi.array().required()
}

export async function checkoutOrder(req : Request, res : Response) {
    const data = req.body

    const validation = await validator(checkoutSchema, data);
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    try {
        
    } catch (error) {
        
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