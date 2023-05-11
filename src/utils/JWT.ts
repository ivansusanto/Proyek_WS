import jwt from "jsonwebtoken";
import env from "../config/env.config";

const generateToken = (payload: any, duration: string): string => {
    return jwt.sign(
        { ...payload },
        env("JWT_SECRET"),
        { expiresIn: duration }
    );
}

export {
    generateToken
}