import { Request, Response, NextFunction } from "express";
import { ValidationError } from "joi";
import StandardError from "../errors/StandardError";
import env from "../config/env.config";
import JoiError from "../errors/JoiError";

export default async function handlerError(
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
  if (err instanceof ValidationError) {
    err = new JoiError(err);
  } else if (env("NODE_ENV") == "DEV" || env("NODE_ENV") == "PROD") {
    console.log("Class : ", err.constructor.name);
    console.log("-".padStart(32, "-"));
    console.log(err);
  }

  if (err instanceof StandardError) {
    return res.status(err.statusCode).json({ error: err.details() });
  }
  res.status(500).json("Something went wrong");
  // res.status(500).json(err);
}