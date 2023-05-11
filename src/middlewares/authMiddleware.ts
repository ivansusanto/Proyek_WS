import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY: string = process.env.SECRET_KEY?.toString() ?? "";

interface Users {
    api_key: string
}

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decodedToken = jwt.verify(token, SECRET_KEY) as Users;
        req.body.api_key = decodedToken.api_key;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};