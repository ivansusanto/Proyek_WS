import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../../build/prisma/prisma-client';
import env from "../config/env.config";
import { StatusCode } from '../utils/StatusCode';
import { IDeveloper } from '../models/Developer';

const prisma = new PrismaClient();

interface Users {
    username: string,
    email: string
}

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }
    try {
        const decodedToken = jwt.verify(token, env('SECRET_KEY')) as Users;
        const username = decodedToken.username;
        const email = decodedToken.email;

        const developer:IDeveloper|null = await prisma.developers.findFirst({
            where: {
                OR: [
                    { email },
                    { username },
                ]
            }
        }); 

        if (developer) {
            req.body.developer = developer.username;
            next();
        } else {
            return res.status(StatusCode.NOT_FOUND).json({ message: 'Developer Not Found' });
        }
    } catch (err) {
        return res.status(StatusCode.UNAUTHORIZED).json({ message: 'Invalid Token' });
    }
};