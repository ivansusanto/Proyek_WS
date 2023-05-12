import Joi from "./Joi";
import { SchemaMap, ObjectSchema } from "joi";

export default async function validate(schema: SchemaMap, data: any) {
    const joiSchema: ObjectSchema = Joi.object(schema);
    
    return await joiSchema.validateAsync(data);
}