"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHashedPassword = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var saltRounds = 10;
var salt = bcrypt_1.default.genSaltSync(saltRounds);
var generateHashedPassword = function (password) {
    return bcrypt_1.default.hashSync(password, salt);
};
exports.generateHashedPassword = generateHashedPassword;
