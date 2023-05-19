import { PrismaClient, Prisma } from '../../prisma/prisma-client';
import { generateId } from '../utils/GenerateId';
import { generateHashedPassword } from '../utils/Bcrypt';

const prisma = new PrismaClient();

export interface IDeveloper {
    developer_id: string;
    username: string;
    password: string;
    email: string;
    full_name: string;
    display_name: string;
    status?: number; //artinya boleh null
}

export default new (class Developer {
    async create(developer: Prisma.developersCreateInput) {
        const developer_id: string = generateId('D', await prisma.developers.count());
        const hashedPassword: string = generateHashedPassword(developer.password);
        const data:IDeveloper = {
            developer_id: developer_id,
            username: developer.username,
            password: hashedPassword,
            email: developer.email,
            full_name: developer.full_name,
            display_name: developer.display_name,
        }
        return await prisma.developers.create({ data });
    }

    async fetchByUsername(username: string): Promise<IDeveloper|null>{
        const developer:IDeveloper|null = await prisma.developers.findFirst({
            where: {
                username: username
            }
        });
        if (developer) return developer;
        else return null;
    }

    async fetchByUsernameOrEmail(username: string, email: string): Promise<IDeveloper|null>{
        const developer:IDeveloper|null = await prisma.developers.findFirst({
            where: {
                OR: [
                    { email: email },
                    { username: username },
                ],
            },
        });
        if (developer) return developer;
        else return null;
    }

    async updateBalance(developer_id: string, balance: number) {
        const developer = await prisma.developers.findFirst({
            where:{
                developer_id: developer_id
            }
        });

        if (developer && (balance * -1) > developer.balance) return null;

        await prisma.developers.updateMany({
            where: {
                developer_id: developer_id
            },
            data: {
                balance: {
                    increment: balance
                }
            }
        })

        return await prisma.developers.findFirst({
            where:{
                developer_id: developer_id
            },
            select: {
                full_name: true,
                username: true,
                email: true,
                balance: true
            }
        });
    }
})();