import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const saltRounds:number = 10;
const salt: string | number = bcrypt.genSaltSync(saltRounds);
const SECRET_KEY: string = process.env.SECRET_KEY?.toString() ?? "";

export async function registerDeveloper(req : Request, res : Response) {
    const { username, password, email, full_name, display_name }: {
      username: string,
      password: string,
      email: string,
      full_name: string,
      display_name: string
    } = req.body;
    const dev_id : string = await generateDeveloperId();
    const api_key_dev : string = await generateApiKey();
    const token = jwt.sign({ api_key: api_key_dev }, SECRET_KEY, { expiresIn: '1h' });
    const hashedPassword: string = bcrypt.hashSync(password, salt);
    await prisma.developers.create({
        data: {
            developer_id: dev_id,
            username: username,
            password:hashedPassword,
            email: email,
            full_name: full_name,
            display_name: display_name,
            api_key: api_key_dev
        }
    });
    return res.status(201).send({ token: token });
}

export async function loginDeveloper(req : Request, res : Response) {
    const {email, username, password}:{
      username: string,
      password: string,
      email: string,
    } = req.body

}

async function generateDeveloperId(): Promise<string> {
    const developerCount = await prisma.developers.count();
    const newIdNumber = (developerCount + 1).toString();
    const paddingSize = 4 - newIdNumber.length;
    const zeroPadding = '0'.repeat(paddingSize);
    const newId = `D${zeroPadding}${newIdNumber}`;
  
    return newId;
  }
  

async function generateApiKey(): Promise<string> {
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < 50; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    const existingDeveloper = await prisma.developers.findMany({
      where: {
        api_key: result,
      },
      take: 1,
    });
  
    if (existingDeveloper.length > 0) {
      return generateApiKey();
    }
  
    return result;
  }
  