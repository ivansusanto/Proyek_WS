import { PrismaClient, Prisma } from '../../build/prisma/prisma-client';
import { generateId } from '../utils/GenerateId';

const prisma = new PrismaClient();

//ORDER STATUS
//0 = blm dibayar
//1 = berhasil dibayar

export interface IOrder {
    order_id: string;
    invoice: string;
    date: Date;
    total: number;
    status: number;
    user_id: string;
}

export default new(class Order{
    async create(user_id: string, total: number, product_id: string[], qty: number[], bank: string) : Promise<string>{
        const order_id: string = generateId('O', await prisma.orders.count());

        const Invoice = await this.createInvoice()
        
        await prisma.orders.create({
            data:{
                order_id: order_id,
                invoice: Invoice,
                date: new Date(),
                total: total,
                users: {
                    connect: {
                        user_id: user_id
                    }
                },
                bank: bank
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

        return Invoice
    }

    async setVANumber(Invoice: string, va_number: string){
        await prisma.orders.updateMany({
            where: {
                invoice: Invoice
            },
            data: {
                va_number: va_number
            }
        })
    }

    async createInvoice(): Promise<string>{
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

    async getOrderByInvoice(Invoice: string): Promise<IOrder|null>{
        const order = await prisma.orders.findFirst({
            where: {
                invoice: Invoice
            }
        })

        if(order) return order

        return null
    }

    async changeStatusOrder(invoice_number: string){
        await prisma.orders.updateMany({
            where: {
                invoice: invoice_number
            },
            data: {
                status: 1
            }
        })
    }

    async fetchAllOrderByDeveloperId(developer_id: string){
        return await prisma.orders.findMany({
            where:{
                users:{
                    developer_id: developer_id
                }
            },
            select: {
                invoice: true,
                date: true,
                total: true,
                status: true,
                users:{
                    select:{
                        customer_id: true
                    }
                }
            }
        })
    }

    async fetchOrderByDeveloperIdInvoice(developer_id: string, invoice: string){
        return await prisma.orders.findMany({
            where:{
                users:{
                    developer_id: developer_id
                },
                invoice: invoice
            },
            select: {
                invoice: true,
                date: true,
                total: true,
                status: true,
                bank: true,
                va_number: true,
                users:{
                    select:{
                        customer_id: true
                    }
                }
            }
        })
    }

    async fetchDetailOrder(developer_id: string, invoice: string){
        return await prisma.orders.findMany({
            where:{
                users:{
                    developer_id: developer_id
                },
                invoice: invoice
            },
            select: {
                invoice: true,
                date: true,
                total: true,
                status: true,
                bank: true,
                va_number: true,
                users:{
                    select:{
                        customer_id: true
                    }
                },
                order_items:{
                    select:{
                        products:{
                            select:{
                                name: true,
                                price: true
                            }
                        },
                        quantity: true
                    }
                }
            }
        })
    }

    async fetchOrderByCustomer(developer_id: string, customer_id: string){
        return await prisma.orders.findMany({
            where:{
                users:{
                    developer_id: developer_id,
                    customer_id: customer_id
                }
            },
            select:{
                invoice: true,
                date: true,
                total: true,
                status: true,
                bank: true,
                va_number: true,
            }
        })
    }
})