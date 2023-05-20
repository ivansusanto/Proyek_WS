import { PrismaClient, Prisma } from '../../build/prisma/prisma-client';
import User from './User';
import Developer, { IDeveloper } from './Developer';

const prisma = new PrismaClient();
export interface ICart {
    cart_id: string;
    quantity: number;
    users: {
        connect: {
            user_id: string;
        }
    },
    products: {
        connect: {
            product_id: string;
        }
    }
}

export default new (class Cart {
    async generateCartId(): Promise<string> {
        const latestOrder = await prisma.carts.findFirst({
            orderBy:{
                cart_id: "desc"
            }
        })

        let latestIdNumber: number = parseInt(latestOrder?.cart_id.substring(1) ?? "0")
        let newestId: string = "K" + (latestIdNumber+1).toString().padStart(4, "0")
        return newestId
    }

    async create(cart: Prisma.cartsCreateInput, user_id:string, product_id: string) {
        const cart_id = await this.generateCartId()
        const data:ICart = {
            cart_id: cart_id,
            quantity: +cart.quantity,
            users: {
                connect: {
                    user_id: user_id
                }
            },
            products: {
                connect: {
                    product_id: product_id
                }
            }
        }
        return await prisma.carts.create({ data });
    }

    async checkDuplicateEntry(user_id: string, product_id: string){
        return await prisma.carts.findFirst({
            where: {
                users: {
                    user_id: user_id
                },
                products: {
                    product_id: product_id
                }
            }
        });
    }

    async checkBefore(product_id: string, developer_id: string){
        return await prisma.products.findFirst({
            where: {
                product_id: product_id,
                developers:{
                    developer_id: developer_id
                }
            }
        });
    }
    
    async update(user_id: string, product_id: string, quantity: number) {
        const cart = await this.checkDuplicateEntry(user_id, product_id);
        return await prisma.carts.update({
            where: {
                cart_id: cart?.cart_id
            },
            data: {
                quantity: quantity
            }
        });
    }

    async getUserCart(customer_id: string, developer_username: string) {
        const developer:IDeveloper = await Developer.fetchByUsername(developer_username) as IDeveloper
        const user = await User.checkCustomerID(customer_id, developer.developer_id)
        if (user !== ' ') {
            return await prisma.carts.findMany({
                select:{
                    quantity: true,
                    products: {
                        select:{
                            name: true,
                            price: true,
                            description: true,
                            image: true,
                            stock: true
                        }
                    }
                },
                where: {
                    users: {
                        user_id: user.user_id
                    },
                }
            });
        } else {
            return ' '
        }
    }

    async delete(user_id: string, product_id: string) {
        const cart = await this.checkDuplicateEntry(user_id, product_id);
        await prisma.carts.delete({
            where: {
                cart_id: cart?.cart_id
            }
        });
    }
})();