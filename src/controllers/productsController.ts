import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import validator from '../validations/Validator';
import { generateId } from '../utils/GenerateId';

const prisma = new PrismaClient();

const addProductSchema = {

}

export async function addProduct(req : Request, res : Response) {
    const product_id: string = generateId('P', await prisma.products.count());
    // return res.json(req.body)

    await validator(addProductSchema, req.body);

    const {
        
    } = req.body;
    let product: Prisma.productsCreateInput;
    product = {
        product_id: "P0001",
        name: "Barang",
        description: "Ini barang",
        price: 10000,
        stock: 10,
        status: 1,
        image: '',
        developers: {
            connect: {
                developer_id: "D0001"
            }
        }
    };
    const result = await prisma.products.create({
        data: product
    });

    return res.status(201).json(result);
}

export async function fetchProduct(req : Request, res : Response) {
    
}

export async function fetchProductById(req : Request, res : Response) {
    
}

export async function updateProduct(req : Request, res : Response) {
    
}