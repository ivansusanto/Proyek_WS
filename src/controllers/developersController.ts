import { Request, Response } from 'express';
import validator from '../validations/Validator';
import { generateToken } from '../utils/JWT';
import Developer, { IDeveloper } from '../models/Developer';
import bcrypt from 'bcrypt'
import Joi from 'joi';
import { StatusCode } from '../helpers/statusCode';

const addDeveloperSchema = {
    username: Joi.string().min(2).max(255).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    full_name: Joi.string().required(),
    display_name: Joi.string().required()
}

export async function registerDeveloper(req : Request, res : Response) {
    const data:IDeveloper = req.body;
    const validation = await validator(addDeveloperSchema, data)
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });
    
    const token = generateToken({ 
        email: data.email || undefined,
        username: data.username || undefined, 
    }, '1h');
    await Developer.create(data)
    res.status(StatusCode.CREATED).send({ token: token });
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
            res.status(StatusCode.OK).send({ token: token });
        } else {
            res.status(StatusCode.UNAUTHORIZED).send({message:'Invalid password'});
        }
    } catch (error: any) {
        if (error.message === 'Developer not found') {
            res.status(StatusCode.BAD_REQUEST).send({message:'Developer not found'});
        } else {
            res.status(StatusCode.INTERNAL_SERVER).send({message:'Internal server error'});
        }
    }
}

async function checkPasswordByEmailOrUsername(
    email: string,
    username: string,
    password: string
): Promise<boolean> {
    const developer = await Developer.fetchByUsernameOrEmail(username, email)
    if (!developer) throw new Error('Developer not found');
    const isPasswordValid = await bcrypt.compare(password, developer.password);
    return isPasswordValid;
}