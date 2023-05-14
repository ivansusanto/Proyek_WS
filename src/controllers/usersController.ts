import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import User from '../models/User';
import Developer from '../models/Developer';

const prisma = new PrismaClient();

export async function addUser(req : Request, res : Response) {
    const user_id : string = req.body.user_id;

    try {
        const developer_id : string = await Developer.fetchByUsername(req.body.developer.username)
    
        if(await User.checkCustomerID(user_id, developer_id)){
            return res.status(400).json({
                message: "user_id already registered"
            });
        }
    
        User.create(user_id, developer_id)
    
        return res.status(201).json({
            customer_id: user_id,
            status: 1
        });
        
    } catch (error : any) {
        return res.status(500).json({
            message: "Internal server error: " + error.message
        })
    }
};

export async function updateStatus(req : Request, res : Response) {
    const user_id : string = req.params.user_id;
    const status : any = req.body.status;

    try {
        const developer_id : string = await Developer.fetchByUsername(req.body.developer.username)
    
        if(!await User.checkCustomerID(user_id, developer_id)){
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

        await User.update(user_id, developer_id, stat)
    
        return res.status(201).json({
            user_id,
            status: stat
        });
        
    } catch (error: any) {
        return res.status(500).json({
            message: "Internal server error: " + error.message
        })
    }

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