import Joi from "./Joi";
import { SchemaMap, ObjectSchema } from "joi";

export default async function validate(schema: SchemaMap, data: any) {
    schema.developer = Joi.allow();
    const joiSchema: ObjectSchema = Joi.object(schema);
    
    try {
        return await joiSchema.validateAsync(data);
    } catch (err) {
        return err;
    }
}