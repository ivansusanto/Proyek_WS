import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';

const prisma = new PrismaClient();

export default new (class Developer {
    // async create(product: Prisma.productsCreateInput, developer_id: string) {
    //     const product_id: string = generateId('P', await prisma.products.count());
    //     return await prisma.products.create({
    //         data: {
    //             product_id: product_id,
    //             name: product.name,
    //             description: product.description,
    //             price: product.price,
    //             stock: product.stock,
    //             status: product.status,
    //             image: product.image,
    //             developers: {
    //                 connect: {
    //                     developer_id: developer_id
    //                 }
    //             }
    //         }
    //     });
    // }

    async fetchByUsername(username: string): Promise<string>{
            const developer = await prisma.developers.findFirst({
                where: {
                    username: username
                }
            });

            if (developer) return developer.developer_id;
            return '';
        }
})();