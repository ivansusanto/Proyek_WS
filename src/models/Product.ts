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

    async get(username: string) {
        return await prisma.products.findMany({
            select: {
                product_id: true,
                name: true,
                description: true,
                price: true,
                stock: true,
                status: true,
                image: true
            },
            where: {
                developers: {
                    username: username
                }
            }
        });
    }

    async update(product: Prisma.productsUpdateInput, username: string, product_id: string) {
        const developer_id = await prisma.developers.findFirst({
            select: {
                developer_id: true
            },
            where: {
                username: username
            }
        });

        const product_developer_id = await prisma.products.findFirst({
            select: {
                developer_id: true
            },
            where: {
                product_id: product_id
            }
        });

        if (!product_developer_id) return false;

        if (developer_id && product_developer_id && developer_id.developer_id !== product_developer_id.developer_id) return false;

        return await prisma.products.update({
            where: {
                product_id: product_id,
            },
            data: product
        });
    }

    async fetchById(username: string, product_id: string) {
        return await prisma.products.findMany({
            select: {
                product_id: true,
                name: true,
                description: true,
                price: true,
                stock: true,
                status: true,
                image: true
            },
            where: {
                product_id: product_id,
                developers: {
                    username: username
                }
            }
        });
    }
})();