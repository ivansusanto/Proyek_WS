import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';
import { generateHashedPassword } from '../utils/Bcrypt';

const prisma = new PrismaClient();

export default new (class User {
    // async create(user: Prisma.usersCreateInput) {
    //     const user_id: string = generateId('U', await prisma.users.count());
    //     return await prisma.users.create({
    //         data: {
    //             user_id: user_id,
    //             customer_id: user.user_id,
    //             developer_id: ...
    //         }
    //     });
    // }

    // async fetchByUsername(username: string): Promise<string>{
    //         const developer = await prisma.users.findFirst({
    //             where: {
    //                 username: username
    //             }
    //         });

    //         if (developer) return developer.developer_id;
    //         return '';
    //     }
})();