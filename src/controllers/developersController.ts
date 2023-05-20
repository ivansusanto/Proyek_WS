import { Request, Response } from 'express';
import validator from '../validations/Validator';
import { generateToken } from '../utils/JWT';
import Developer, { IDeveloper } from '../models/Developer';
import bcrypt from 'bcrypt'
import Joi from 'joi';
import { StatusCode } from '../utils/StatusCode';

const addDeveloperSchema = {
    username: Joi.string().min(2).max(255).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
    full_name: Joi.string().required(),
    display_name: Joi.string().required()
}

const withdrawalSchema = {
    amount: Joi.number().min(1).required(),
    account_number: Joi.string().required()
}

export async function registerDeveloper(req : Request, res : Response) {
    const data:IDeveloper = req.body;
    const validation = await validator(addDeveloperSchema, data)
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    const developer = await Developer.fetchByUsernameOrEmail(data.username, data.email);
    if (developer) return res.status(400).json({ message: `User is already registered` });

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

export async function withdrawalDeveloper(req : Request, res : Response) {
    const data = req.body;

    const validation = await validator(withdrawalSchema, data);
    if (validation.message) return res.status(StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") });

    const developer: IDeveloper = await Developer.fetchByUsername(data.developer) as IDeveloper
    const newDeveloper = await Developer.updateBalance(developer.developer_id, -data.amount);
    if (!newDeveloper) return res.status(StatusCode.BAD_REQUEST).json({ message: `Insufficient balance`});

    return res.status(StatusCode.OK).json({
        message: `The balance ${data.amount} will be disbursed at ${data.account_number}, wait for verification`,
        ...newDeveloper
    });
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
