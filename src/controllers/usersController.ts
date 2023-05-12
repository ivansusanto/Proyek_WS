import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addUser(req : Request, res : Response) {
    const { user_id }:{
        user_id : string
    } = req.body;

    const dev_id : string = await getDeveloperID(req.body.data.username)

    checkCustomerID(user_id, dev_id)

    const newID = await generateUserID();

    // await prisma.users.create({
    //     data:{
    //         user_id: newID,
    //         status: 1,
    //         customer_id: user_id,
    //         developer_id: dev_id
    //     }
    // });

    return res.status(200).json("Success");
};

export async function updateStatus(req : Request, res : Response) {
    
};

async function getDeveloperID(username : string) : Promise<string> {
    const devID = await prisma.developers.findFirst({
        where:{
            username: username
        },
        select:{
            developer_id: true
        }
    })

    if (devID){
        return devID.developer_id
    }
    
    return ''
}

async function generateUserID() : Promise<string> {
    const latestUser = await prisma.users.findFirst({
        orderBy: {
            user_id: 'desc'
        }
    });

    const latestID: string | undefined = latestUser?.user_id;
    let numberID = parseInt(latestID?.substring(1, 5) ?? '0', 10);

    numberID++;
    const newID = "U" + numberID.toString().padStart(4, "0");

    return newID;
    
};

async function checkCustomerID(user_id : string, developer_id : string) : Promise<boolean>{
    const checkID = await prisma.users.findFirst({
        where:{
            customer_id: user_id,
            developer_id: developer_id
        }
    })

    //BLM DIBUAT PENGECEKAN
    console.log(checkID);
    return true;
};