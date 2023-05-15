import { Request, Response } from 'express';
import User from '../models/User';
import Developer from '../models/Developer';
import Joi from 'joi';
import validator from '../validations/Validator';

const addUserSchema = {
    customer_id: Joi.string().required()
}

const updateUserSchema = {
    status: Joi.number().required()
}

export async function addUser(req : Request, res : Response) {
    const data : any = req.body;

    const validation = await validator(addUserSchema, data);
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    try {
        const developer_id : string = await Developer.fetchByUsername(req.body.developer)

        if(developer_id == ""){
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    
        if(await User.checkCustomerID(data.user_id, developer_id) != ""){
            return res.status(400).json({
                message: "customer_id already registered"
            });
        }
    
        User.create(data.customer_id, developer_id)
    
        return res.status(201).json({
            customer_id: data.customer_id,
            status: 1
        });
        
    } catch (error : any) {
        return res.status(500).json({
            message: "Internal server error: "
        })
    }
};

export async function updateStatus(req : Request, res : Response) {
    const customer_id : string = req.params.customer_id;
    const data : any = req.body;

    try {
        const developer_id : string = await Developer.fetchByUsername(req.body.developer)

        if(developer_id == ""){
            return res.status(500).json({
                message: "Internal Server Error"
            });
        }
    
        if(await User.checkCustomerID(customer_id, developer_id) == ""){
            return res.status(400).json({
                message: "User id is not registered"
            });
        }
    
        const validation = await validator(updateUserSchema, data);
        if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
        
        const status : number = parseInt(data.status)
        
        await User.update(customer_id, developer_id, status)
    
        return res.status(201).json({
            customer_id,
            status: status
        });
        
    } catch (error: any) {
        return res.status(500).json({
            message: "Internal server error: "
        })
    }

};