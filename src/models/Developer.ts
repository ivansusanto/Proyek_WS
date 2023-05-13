import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';
import { generateHashedPassword } from '../utils/Bcrypt';

const prisma = new PrismaClient();

export default new (class Developer {
    async create(developer: Prisma.developersCreateInput) {
        const developer_id: string = generateId('D', await prisma.developers.count());
        const hashedPassword: string = generateHashedPassword(developer.password);
        return await prisma.developers.create({
            data: {
                developer_id: developer_id,
                username: developer.username,
                password: hashedPassword,
                email: developer.email,
                full_name: developer.full_name,
                display_name: developer.display_name,
            }
        });
    }

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