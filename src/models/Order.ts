import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';
import User from './User';

const prisma = new PrismaClient();

export default new(class Order{
    async create(user_id: string, total: number, product_id: string[], qty: number[]){
        const order_id: string = generateId('O', await prisma.orders.count());

        const date: Date = new Date()
        const INVcount: string = (await prisma.orders.count() + 1).toString()
        const Invoice: string = "INV" + date.getDate().toString() + (date.getMonth() + 1).toString() + date.getFullYear().toString() + INVcount.padStart(4, "0")

        // let order_items: Prisma.order_itemsCreateManyInput[] = []
        // for(let i = 0; i < product_id.length; i++){
        //     let order_item: Prisma.order_itemsCreateManyInput = {
        //         quantity: qty[i],
        //         order_id: order_id,
        //         product_id: product_id[i],
        //     }
        //     order_items.push(order_item)
        // }

        // await prisma.order_items.createMany({
        //     data: order_items
        // })

        await prisma.orders.create({
            data:{
                order_id: order_id,
                invoice: Invoice,
                date: new Date(),
                total: total,
                status: 1,
                users: {
                    connect: {
                        user_id: user_id
                    }
                }
            }
        })
        
        for(let i = 0; i < product_id.length; i++){
            await prisma.order_items.create({
                data:{
                    quantity: qty[i],
                    orders:{
                        connect:{
                            order_id: order_id,
                        }
                    },
                    products:{
                        connect:{
                            product_id: product_id[i]
                        }
                    }
                }
            })

        }


    }
})