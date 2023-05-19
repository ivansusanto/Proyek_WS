"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = exports.fetchProductById = exports.fetchProduct = exports.addProduct = void 0;
var Validator_1 = __importDefault(require("../validations/Validator"));
var Product_1 = __importDefault(require("../models/Product"));
var Developer_1 = __importDefault(require("../models/Developer"));
var env_config_1 = __importDefault(require("../config/env.config"));
var joi_1 = __importDefault(require("joi"));
var fs_1 = __importDefault(require("fs"));
var statusCode_1 = require("../helpers/statusCode");
var addProductSchema = {
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    price: joi_1.default.number().required().min(1),
    stock: joi_1.default.number().min(1),
    image: joi_1.default.any().required()
};
var updateProductSchema = {
    product_id: joi_1.default.string().required(),
    name: joi_1.default.string(),
    description: joi_1.default.string(),
    price: joi_1.default.number().min(1),
    stock: joi_1.default.number().min(1),
    image: joi_1.default.any(),
    status: joi_1.default.number().min(0).max(1)
};
function addProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, developer, newProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    return [4 /*yield*/, (0, Validator_1.default)(addProductSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(data.developer)];
                case 2:
                    developer = _a.sent();
                    return [4 /*yield*/, Product_1.default.create(data, developer.developer_id)];
                case 3:
                    newProduct = _a.sent();
                    newProduct.image = (0, env_config_1.default)('PREFIX_URL') + '/api/assets/' + newProduct.image;
                    return [2 /*return*/, res.status(statusCode_1.StatusCode.CREATED).json({
                            message: 'Success add product',
                            data: newProduct
                        })];
            }
        });
    });
}
exports.addProduct = addProduct;
function fetchProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productResult, _i, productResult_1, element;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Product_1.default.get(req.body.developer)];
                case 1:
                    productResult = _a.sent();
                    for (_i = 0, productResult_1 = productResult; _i < productResult_1.length; _i++) {
                        element = productResult_1[_i];
                        element.image = (0, env_config_1.default)('PREFIX_URL') + '/api/assets/' + element.image;
                    }
                    return [2 /*return*/, res.status(statusCode_1.StatusCode.OK).json({
                            message: 'OK',
                            data: productResult
                        })];
            }
        });
    });
}
exports.fetchProduct = fetchProduct;
function fetchProductById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var productResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Product_1.default.fetchById(req.body.developer, req.params.product_id)];
                case 1:
                    productResult = _a.sent();
                    if (!productResult)
                        return [2 /*return*/, res.status(statusCode_1.StatusCode.FORBIDDEN).json({ message: 'Forbidden' })];
                    productResult.image = (0, env_config_1.default)('PREFIX_URL') + '/api/assets/' + productResult.image;
                    return [2 /*return*/, res.status(statusCode_1.StatusCode.OK).json({
                            message: 'OK',
                            data: productResult
                        })];
            }
        });
    });
}
exports.fetchProductById = fetchProductById;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, tempProduct, updatedProduct;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = __assign(__assign({}, req.params), req.body);
                    return [4 /*yield*/, (0, Validator_1.default)(updateProductSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(statusCode_1.StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    delete req.body.developer;
                    if (data.price)
                        req.body.price = parseInt(data.price);
                    if (data.stock)
                        req.body.stock = parseInt(data.stock);
                    if (data.status)
                        req.body.status = parseInt(data.status);
                    return [4 /*yield*/, Product_1.default.fetchById(data.developer, data.product_id)];
                case 2:
                    tempProduct = _a.sent();
                    if (tempProduct)
                        fs_1.default.unlinkSync('./uploads/' + tempProduct.image);
                    return [4 /*yield*/, Product_1.default.update(req.body, data.developer, data.product_id)];
                case 3:
                    updatedProduct = _a.sent();
                    if (!updatedProduct)
                        return [2 /*return*/, res.status(statusCode_1.StatusCode.FORBIDDEN).json({ message: 'Forbidden' })];
                    updatedProduct.image = (0, env_config_1.default)('PREFIX_URL') + '/api/assets/' + updatedProduct.image;
                    return [2 /*return*/, res.status(statusCode_1.StatusCode.OK).json({
                            message: 'Success update product',
                            data: updatedProduct
                        })];
            }
        });
    });
}
exports.updateProduct = updateProduct;
