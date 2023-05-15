import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addCart(req : Request, res : Response) {
    const data = req.body;
    // const token = 
}

export async function fetchCart(req : Request, res : Response) {
    
}

export async function updateCart(req : Request, res : Response) {
    
}

export async function deleteCart(req : Request, res : Response) {
    
}