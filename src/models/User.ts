import { PrismaClient, Prisma } from '@prisma/client';
import { generateId } from '../utils/GenerateId';
import { generateHashedPassword } from '../utils/Bcrypt';

const prisma = new PrismaClient();

export default new (class User {
    async create(customer_id: string, developer_id: string){
        const user_id: string = generateId('U', await prisma.users.count());
        return await prisma.users.create({
            data: {
                user_id: user_id,
                status: 1, 
                customer_id: customer_id,
                developer_id: developer_id
            }
        });
    }

    async checkCustomerID(customer_id: string, developer_id: string) : Promise<boolean>{
        const checkID = await prisma.users.findFirst({
            where:{
                customer_id: customer_id,
                developer_id: developer_id
            }
        })
    
        if(checkID) return true;
    
        return false;
    }

    async update(customer_id: string, developer_id: string, status: number){
        await prisma.users.updateMany({
            where:{
                customer_id: customer_id,
                developer_id: developer_id
            },
            data: {
                status: status
            }
        })
    }
})();