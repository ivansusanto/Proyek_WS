import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addUser(req : Request, res : Response) {
    const { user_id }:{
        user_id : string
    } = req.body;

    getDeveloperID(req.body.data.username)

    // checkCustomerID(user_id, "D0001")

    // const newID = await generateUserID();

    // await prisma.users.create({
    //     data:{
    //         user_id: newID,
    //         status: 1,
    //         customer_id: "M0002",
    //         developer_id: "D0001"
    //     }
    // });

    return res.status(200).json("Success");
};

export async function updateStatus(req : Request, res : Response) {
    
};

async function getDeveloperID(username : string) : Promise<string> {
    const devID = await prisma.developers.findMany({
        where:{
            username: username
        },
        select:{
            developer_id: true
        }
    })

    console.log(devID)

    return "asd"
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
    const checkID = await prisma.users.findMany({
        where:{
            customer_id: user_id,
            developer_id: developer_id
        }
    })

    console.log(checkID);
    return true;
};