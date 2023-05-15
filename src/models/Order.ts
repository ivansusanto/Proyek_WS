import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';

const prisma = new PrismaClient();

export default new(class Order{
    async create(customer_id : string, total : number){
        const order_id: string = generateId('O', await prisma.orders.count());

        const date = new Date()
        const invoice = "INV" + date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString()

    }
})