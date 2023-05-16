import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';

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

    // async get(username: string) {
    //     return await prisma.products.findMany({
    //         select: {
    //             product_id: true,
    //             name: true,
    //             description: true,
    //             price: true,
    //             stock: true,
    //             status: true,
    //             image: true
    //         },
    //         where: {
    //             developers: {
    //                 username: username
    //             }
    //         }
    //     });
    // }

})();