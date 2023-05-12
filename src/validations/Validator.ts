import Joi from "./Joi";
import { SchemaMap, ObjectSchema } from "joi";

export default async function validate(schema: SchemaMap, data: any) {
    const joi: ObjectSchema = Joi.object(schema);
    return await joi.validateAsync(data);
}