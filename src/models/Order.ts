import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';
import User from './User';

const prisma = new PrismaClient();

export default new(class Order{
    async create(user_id: string, total: number, product_id: string[], qty: number[]) : Promise<string>{
        const order_id: string = generateId('O', await prisma.orders.count());

        const Invoice = await this.getInvoice()
        
        await prisma.orders.create({
            data:{
                order_id: order_id,
                invoice: Invoice,
                date: new Date(),
                total: total,
                status: 0,
                users: {
                    connect: {
                        user_id: user_id
                    }
                }
            }
        })
        
        let order_items: Prisma.order_itemsCreateManyInput[] = []
        for(let i = 0; i < product_id.length; i++){
            let order_item: Prisma.order_itemsCreateManyInput = {
                quantity: qty[i],
                order_id: order_id,
                product_id: product_id[i],
            }
            order_items.push(order_item)
        }
        await prisma.order_items.createMany({
            data: order_items
        })

        // for(let i = 0; i < product_id.length; i++){
        //     await prisma.order_items.create({
        //         data:{
        //             quantity: qty[i],
        //             orders:{
        //                 connect:{
        //                     order_id: order_id,
        //                 }
        //             },
        //             products:{
        //                 connect:{
        //                     product_id: product_id[i]
        //                 }
        //             }
        //         }
        //     })
        // }

        return Invoice
    }

    async getInvoice(): Promise<string>{
        const date: Date = new Date()
        
        const dateString: string = date.getDate().toString().padStart(2, "0") + (date.getMonth() + 1).toString().padStart(2, "0") + date.getFullYear().toString()

        const order = await prisma.orders.findFirst({
            orderBy: {
                order_id: 'desc'
            }
        })

        let count: number = 0
        if(!order) count = 1
        else{
            const orderDate: string = order.invoice.substring(3, 11)
            if(dateString == orderDate) count = parseInt(order.invoice.substring(11)) + 1
            else count = 1
        }

        const Invoice: string = "INV" + dateString + count.toString().padStart(4, "0")

        return Invoice
    }
})