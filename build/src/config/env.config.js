"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var dictionary = {
    SECRET_KEY: process.env.SECRET_KEY,
    PREFIX_URL: process.env.PREFIX_URL,
    MIDTRANS_SERVER_KEY: process.env.MIDTRANS_SERVER_KEY
};
function env(key) {
    return dictionary[key];
}
exports.default = env;
