import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function addUser(req : Request, res : Response) {
    const user_id : string = req.body.user_id;

    const developer_id : string = await getDeveloperID(req.body.data.username)

    if(await checkCustomerID(user_id, developer_id)){
        return res.status(400).json({
            message: "user_id already registered"
        });
    }

    const newID = await generateUserID();

    await prisma.users.create({
        data:{
            user_id: newID,
            status: 1,
            customer_id: user_id,
            developer_id: developer_id
        }
    });

    return res.status(200).json({
        customer_id: user_id,
        status: 1
    });
};

export async function updateStatus(req : Request, res : Response) {
    const user_id : string = req.params.user_id;
    const status : any = req.body.status;

    const developer_id : string = await getDeveloperID(req.body.data.username)

    if(!await checkCustomerID(user_id, developer_id)){
        return res.status(400).json({
            message: "User id is not registered"
        });
    }

    if(isNaN(status)){
        return res.status(400).json({
            message: "Status must be a number"
        });
    }

    const stat : number = parseInt(status)

    const update = await prisma.users.updateMany({
        where:{
            customer_id: user_id,
            developer_id: developer_id
        },
        data: {
            status: stat
        }
    })

    return res.status(400).json({
        user_id,
        status: stat
    });

};


//Function
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

    if(checkID) return true;

    return false;
};