import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import env from "../config/env.config";

const prisma = new PrismaClient();

interface Users {
    username: string,
    email: string
}

export const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decodedToken = jwt.verify(token, env('SECRET_KEY')) as Users;
        const username = decodedToken.username;
        const email = decodedToken.email;

        const developer = await prisma.developers.findFirst({
            where: {
                OR: [
                    { email },
                    { username },
                ]
            }
        });

        if (developer) {
            req.body.developer = {
                username: developer.username
            };
            next();
        } else {
            return res.status(404).json({ message: 'Developer Not Found' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};