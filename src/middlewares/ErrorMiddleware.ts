import { Request, Response, NextFunction } from "express";
import { ValidationError } from "joi";

export default async function errorHandler(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (err instanceof ValidationError) {
        // ngecek msg
    }
    
    res.status(500).json("Something went wrong");
}