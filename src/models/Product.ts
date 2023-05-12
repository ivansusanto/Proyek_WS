import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';

const prisma = new PrismaClient();

export default new (class Product {
    async create(product: Prisma.productsCreateInput, developer_id: string) {
        const product_id: string = generateId('P', await prisma.products.count());
        return await prisma.products.create({
            data: {
                product_id: product_id,
                name: product.name,
                description: product.description,
                price: parseInt(product.price.toString()),
                stock: parseInt(product.stock.toString()),
                image: product.image,
                developers: {
                    connect: {
                        developer_id: developer_id
                    }
                }
            }
        });
    }

    
})();