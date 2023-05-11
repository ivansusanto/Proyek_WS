import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../utils/JWT';
import { generateHashedPassword } from '../utils/Bcrypt';
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function registerDeveloper(req : Request, res : Response) {
    const { username, password, email, full_name, display_name }: {
		username: string,
		password: string,
		email: string,
		full_name: string,
		display_name: string
    } = req.body;
    const dev_id : string = await generateDeveloperId();
    
    const token = generateToken({ 
        email: email || undefined,
        username: username || undefined, 
    }, '1h');
    const hashedPassword: string = generateHashedPassword(password);
    await prisma.developers.create({
        data: {
            developer_id: dev_id,
            username: username,
            password: hashedPassword,
            email: email,
            full_name: full_name,
            display_name: display_name
        }
    });

    return res.status(201).send({
        token: token
    });
}

export async function loginDeveloper(req : Request, res : Response) {
    const {email, username, password}:{
		username: string,
		password: string,
		email: string,
    } = req.body
    try {
        const isPasswordValid = await checkPasswordByEmailOrUsername(email, username, password);
        if (isPasswordValid) {
            const token = generateToken({ 
                email: email || undefined,
                username: username || undefined, 
            }, '1h');
            res.status(200).send({
                token: token
            });
        } else {
          res.status(401).send({message:'Invalid password'});
        }
    } catch (error: any) {
        if (error.message === 'User not found') {
          res.status(404).send({message:'User not found'});
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
    const user = await prisma.developers.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });
  
    if (!user) throw new Error('User not found');
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    return isPasswordValid;
}

async function generateDeveloperId(): Promise<string> {
    const developerCount = await prisma.developers.count();
    const newIdNumber = (developerCount + 1).toString();
    const paddingSize = 4 - newIdNumber.length;
    const zeroPadding = '0'.repeat(paddingSize);
    const newId = `D${zeroPadding}${newIdNumber}`;
  
    return newId;
}

