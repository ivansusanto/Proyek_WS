import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';
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
    async create(cart: Prisma.cartsCreateInput, user_id:string, product_id: string) {
        const cart_id: string = generateId('K', await prisma.carts.count());
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
        return await prisma.carts.findMany({
            include:{
                products: true
            },
            where: {
                users: {
                    user_id: user.user_id
                },
            }
        });
    }

    async delete(user_id: string, product_id: string) {
        // const cart = await this.checkDuplicateEntry(user_id, product_id);
        // return await prisma.carts.update({
        //     where: {
        //         cart_id: cart?.cart_id
        //     },
        //     data: {
        //         quantity: quantity
        //     }
        // });
    }
})();