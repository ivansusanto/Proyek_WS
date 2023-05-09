import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function checkoutOrder(req : Request, res : Response) {
    
}

export async function paymentOrder(req : Request, res : Response) {
    
}

export async function fetchOrders(req : Request, res : Response) {
    
}

export async function fetchOrderById(req : Request, res : Response) {
    
}

export async function fetchUserOrder(req : Request, res : Response) {
    
}