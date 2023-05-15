import { Request, Response } from 'express';
import validator from '../validations/Validator';
import { generateToken } from '../utils/JWT';
import Developer from '../models/Developer';
import bcrypt from 'bcrypt'
import Joi from 'joi';

const addDeveloperSchema = {
    username: Joi.string().min(2).max(255).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    full_name: Joi.string().required(),
    display_name: Joi.string().required()
}

export async function registerDeveloper(req : Request, res : Response) {
    const data = req.body;
    const validation = await validator(addDeveloperSchema, data)
    if (validation.message) return res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const token = generateToken({ 
        email: data.email || undefined,
        username: data.username || undefined, 
    }, '1h');
    await Developer.create(data)
    res.status(201).send({ token: token });
}

export async function loginDeveloper(req : Request, res : Response) {
    const {email, username, password}:{
		username: string,
		password: string,
		email: string,
    } = req.body;
    try {
        const isPasswordValid = await checkPasswordByEmailOrUsername(email, username, password);
        if (isPasswordValid) {
            const token = generateToken({ 
                email: email || undefined,
                username: username || undefined, 
            }, '1h');
            res.status(200).send({ token: token });
        } else {
            res.status(401).send({message:'Invalid password'});
        }
    } catch (error: any) {
        if (error.message === 'Developer not found') {
            res.status(404).send({message:'Developer not found'});
        } else {
            res.status(500).send({message:'Internal server error'});
        }
    }
}

async function checkPasswordByEmailOrUsername(
    email: string,
    username: string,
    password: string
): Promise<boolean> {
    const developer = await Developer.fetchByUsernameOrEmail(username, email)
    if (developer===' ') throw new Error('Developer not found');
    const isPasswordValid = await bcrypt.compare(password, developer.password);
    return isPasswordValid;
}