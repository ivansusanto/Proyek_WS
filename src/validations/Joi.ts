import DefaultJoi from "joi";
import JoiDate from "@joi/date";

const Joi = DefaultJoi.extend(JoiDate);

export default Joi;