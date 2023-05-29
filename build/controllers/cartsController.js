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
exports.deleteCart = exports.updateCart = exports.fetchCart = exports.addCart = void 0;
var Validator_1 = __importDefault(require("../validations/Validator"));
var Cart_1 = __importDefault(require("../models/Cart"));
var User_1 = __importDefault(require("../models/User"));
var Product_1 = __importDefault(require("../models/Product"));
var joi_1 = __importDefault(require("joi"));
var env_config_1 = __importDefault(require("../config/env.config"));
var StatusCode_1 = require("../utils/StatusCode");
var Developer_1 = __importDefault(require("../models/Developer"));
var addCartSchema = {
    customer_id: joi_1.default.string().required(),
    product_id: joi_1.default.string().required(),
    quantity: joi_1.default.number().min(1).required()
};
var updateCartSchema = {
    quantity: joi_1.default.number().min(1).required(),
    customer_id: joi_1.default.string().required(),
    product_id: joi_1.default.string().required().length(5)
};
var deleteCartSchema = {
    customer_id: joi_1.default.string().required(),
    product_id: joi_1.default.string().required().length(5)
};
function addCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, tempDeveloper, developer, user, check, product, checkOwner, newQuantity, updateCart_1, newCart;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    return [4 /*yield*/, (0, Validator_1.default)(addCartSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    tempDeveloper = req.body.developer;
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(tempDeveloper)];
                case 2:
                    developer = _a.sent();
                    return [4 /*yield*/, User_1.default.checkCustomerID(data.customer_id, developer.developer_id)];
                case 3:
                    user = _a.sent();
                    if (user === ' ')
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).send({ message: "User not found!" })];
                    return [4 /*yield*/, Cart_1.default.checkDuplicateEntry(user.user_id, data.product_id)];
                case 4:
                    check = _a.sent();
                    return [4 /*yield*/, Product_1.default.fetchById(developer.username, data.product_id)];
                case 5:
                    product = _a.sent();
                    if (!product || product.status === 0)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: "Product inactive or not registered" })];
                    return [4 /*yield*/, Cart_1.default.checkBefore(data.product_id, developer.developer_id)];
                case 6:
                    checkOwner = _a.sent();
                    if (!checkOwner) return [3 /*break*/, 10];
                    if (!check) return [3 /*break*/, 8];
                    newQuantity = check.quantity + parseInt(data.quantity);
                    return [4 /*yield*/, Cart_1.default.update(user.user_id, data.product_id, newQuantity)];
                case 7:
                    updateCart_1 = _a.sent();
                    res.status(StatusCode_1.StatusCode.OK).send({
                        cart_id: updateCart_1.cart_id,
                        product_name: product === null || product === void 0 ? void 0 : product.name,
                        quantity: newQuantity
                    });
                    return [3 /*break*/, 10];
                case 8: return [4 /*yield*/, Cart_1.default.create(data, user.user_id, data.product_id)];
                case 9:
                    newCart = _a.sent();
                    res.status(StatusCode_1.StatusCode.CREATED).send({
                        cart_id: newCart.cart_id,
                        product_name: product === null || product === void 0 ? void 0 : product.name,
                        quantity: data.quantity
                    });
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
exports.addCart = addCart;
function fetchCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var customer_id, developer, user_cart, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer_id = req.params.customer_id;
                    developer = req.body.developer;
                    return [4 /*yield*/, Cart_1.default.getUserCart(customer_id, developer)];
                case 1:
                    user_cart = _a.sent();
                    if (user_cart === 'x')
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).send({ message: "User not found" })];
                    for (i = 0; i < user_cart.length; i++) {
                        user_cart[i].products.image = (0, env_config_1.default)('PREFIX_URL') + '/api/assets/' + user_cart[i].products.image;
                    }
                    res.status(StatusCode_1.StatusCode.OK).send(user_cart);
                    return [2 /*return*/];
            }
        });
    });
}
exports.fetchCart = fetchCart;
function updateCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, tempDeveloper, developer, user, check, product, checkOwner, newQuantity, updateCart_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = __assign(__assign({}, req.body), req.params);
                    return [4 /*yield*/, (0, Validator_1.default)(updateCartSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    tempDeveloper = req.body.developer;
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(tempDeveloper)];
                case 2:
                    developer = _a.sent();
                    return [4 /*yield*/, User_1.default.checkCustomerID(data.customer_id, developer.developer_id)];
                case 3:
                    user = _a.sent();
                    if (user === ' ')
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).send({ message: 'User not found!' })];
                    return [4 /*yield*/, Cart_1.default.checkDuplicateEntry(user.user_id, data.product_id)];
                case 4:
                    check = _a.sent();
                    return [4 /*yield*/, Product_1.default.fetchById(developer.username, data.product_id)];
                case 5:
                    product = _a.sent();
                    return [4 /*yield*/, Cart_1.default.checkBefore(data.product_id, developer.developer_id)];
                case 6:
                    checkOwner = _a.sent();
                    if (!checkOwner) return [3 /*break*/, 10];
                    if (!check) return [3 /*break*/, 8];
                    newQuantity = parseInt(data.quantity);
                    return [4 /*yield*/, Cart_1.default.update(user.user_id, data.product_id, newQuantity)];
                case 7:
                    updateCart_2 = _a.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.OK).send({
                            cart_id: updateCart_2.cart_id,
                            product_name: product === null || product === void 0 ? void 0 : product.name,
                            quantity: newQuantity
                        })];
                case 8: return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).send({ message: "".concat(data.product_id, " is not in user's cart!") })];
                case 9: return [3 /*break*/, 11];
                case 10:
                    res.status(StatusCode_1.StatusCode.FORBIDDEN).send({ message: "".concat(data.product_id, " is not your product!") });
                    _a.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.updateCart = updateCart;
function deleteCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, product_id, customer_id, validation, tempDeveloper, developer, user, check, product, checkOwner;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.params, product_id = _a.product_id, customer_id = _a.customer_id;
                    return [4 /*yield*/, (0, Validator_1.default)(deleteCartSchema, { product_id: product_id, customer_id: customer_id })];
                case 1:
                    validation = _b.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    tempDeveloper = req.body.developer;
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(tempDeveloper)];
                case 2:
                    developer = _b.sent();
                    return [4 /*yield*/, User_1.default.checkCustomerID(customer_id, developer.developer_id)];
                case 3:
                    user = _b.sent();
                    if (user === ' ')
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).send({ message: 'User not found!' })];
                    return [4 /*yield*/, Cart_1.default.checkDuplicateEntry(user.user_id, product_id)];
                case 4:
                    check = _b.sent();
                    return [4 /*yield*/, Product_1.default.fetchById(developer.username, product_id)];
                case 5:
                    product = _b.sent();
                    return [4 /*yield*/, Cart_1.default.checkBefore(product_id, developer.developer_id)];
                case 6:
                    checkOwner = _b.sent();
                    if (!checkOwner) return [3 /*break*/, 10];
                    if (!check) return [3 /*break*/, 8];
                    return [4 /*yield*/, Cart_1.default.delete(user.user_id, product_id)];
                case 7:
                    _b.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.OK).send({
                            cart_id: check.cart_id,
                            product_name: product === null || product === void 0 ? void 0 : product.name,
                            message: "Product has been removed from cart"
                        })];
                case 8: return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).send({ message: "".concat(product_id, " is not in user's cart!") })];
                case 9: return [3 /*break*/, 11];
                case 10:
                    res.status(StatusCode_1.StatusCode.FORBIDDEN).send({ message: "".concat(product_id, " is not your product!") });
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}
exports.deleteCart = deleteCart;
