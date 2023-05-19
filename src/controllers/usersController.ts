import { Request, Response } from 'express';
import User from '../models/User';
import Developer, { IDeveloper } from '../models/Developer';
import Joi from 'joi';
import validator from '../validations/Validator';
import { developers } from '@prisma/client';
import { StatusCode } from '../helpers/statusCode';

const addUserSchema = {
    customer_id: Joi.string().required()
}

const updateUserSchema = {
    status: Joi.number().required()
}

export async function addUser(req : Request, res : Response) {
    const data:any = req.body;

    const validation = await validator(addUserSchema, data);
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    try {
        const developer:IDeveloper = await Developer.fetchByUsername(req.body.developer) as IDeveloper

        if(!developer){
            return res.status(StatusCode.INTERNAL_SERVER).json({
                message: "Internal Server Error"
            });
        }
    
        if(await User.checkCustomerID(data.customer_id, developer.developer_id) != " "){
            return res.status(StatusCode.BAD_REQUEST).json({
                message: "customer_id already registered"
            });
        }
    
        User.create(data.customer_id, developer.developer_id)
    
        return res.status(StatusCode.CREATED).json({
            customer_id: data.customer_id,
            status: 1
        });
        
    } catch (error : any) {
        return res.status(StatusCode.INTERNAL_SERVER).json({
            message: "Internal server error: "
        })
    }
};

export async function updateStatus(req : Request, res : Response) {
    const customer_id : string = req.params.customer_id;
    const data : any = req.body;

    try {
        const developer:IDeveloper = await Developer.fetchByUsername(req.body.developer) as developers

        if(!developer){
            return res.status(StatusCode.INTERNAL_SERVER).json({
                message: "Internal Server Error"
            });
        }
    
        if(await User.checkCustomerID(customer_id, developer.developer_id) == " "){
            return res.status(StatusCode.BAD_REQUEST).json({
                message: "User id is not registered"
            });
        }
          
        const validation = await validator(updateUserSchema, data);
        if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
        
        const status : number = parseInt(data.status)
        
        await User.update(customer_id, developer.developer_id, status)
    
        return res.status(StatusCode.CREATED).json({
            customer_id,
            status: status
        });
        
    } catch (error: any) {
        return res.status(StatusCode.INTERNAL_SERVER).json({
            message: "Internal server error: "
        })
    }

};