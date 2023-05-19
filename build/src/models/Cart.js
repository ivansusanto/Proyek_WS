"use strict";
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
var prisma_client_1 = require("../../prisma/prisma-client");
var User_1 = __importDefault(require("./User"));
var Developer_1 = __importDefault(require("./Developer"));
var prisma = new prisma_client_1.PrismaClient();
exports.default = new (/** @class */ (function () {
    function Cart() {
    }
    Cart.prototype.generateCartId = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var latestOrder, latestIdNumber, newestId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, prisma.carts.findFirst({
                            orderBy: {
                                cart_id: "desc"
                            }
                        })];
                    case 1:
                        latestOrder = _b.sent();
                        latestIdNumber = parseInt((_a = latestOrder === null || latestOrder === void 0 ? void 0 : latestOrder.cart_id.substring(1)) !== null && _a !== void 0 ? _a : "0");
                        newestId = "K" + (latestIdNumber + 1).toString().padStart(4, "0");
                        return [2 /*return*/, newestId];
                }
            });
        });
    };
    Cart.prototype.create = function (cart, user_id, product_id) {
        return __awaiter(this, void 0, void 0, function () {
            var cart_id, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generateCartId()];
                    case 1:
                        cart_id = _a.sent();
                        data = {
                            cart_id: cart_id,
                            quantity: +cart.quantity,
                            users: {
                                connect: {
                                    user_id: user_id
                                }
                            },
                            products: {
                                connect: {
                                    product_id: product_id
                                }
                            }
                        };
                        return [4 /*yield*/, prisma.carts.create({ data: data })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cart.prototype.checkDuplicateEntry = function (user_id, product_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.carts.findFirst({
                            where: {
                                users: {
                                    user_id: user_id
                                },
                                products: {
                                    product_id: product_id
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cart.prototype.checkBefore = function (product_id, developer_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.products.findFirst({
                            where: {
                                product_id: product_id,
                                developers: {
                                    developer_id: developer_id
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cart.prototype.update = function (user_id, product_id, quantity) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkDuplicateEntry(user_id, product_id)];
                    case 1:
                        cart = _a.sent();
                        return [4 /*yield*/, prisma.carts.update({
                                where: {
                                    cart_id: cart === null || cart === void 0 ? void 0 : cart.cart_id
                                },
                                data: {
                                    quantity: quantity
                                }
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Cart.prototype.getUserCart = function (customer_id, developer_username) {
        return __awaiter(this, void 0, void 0, function () {
            var developer, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Developer_1.default.fetchByUsername(developer_username)];
                    case 1:
                        developer = _a.sent();
                        return [4 /*yield*/, User_1.default.checkCustomerID(customer_id, developer.developer_id)];
                    case 2:
                        user = _a.sent();
                        if (!(user !== ' ')) return [3 /*break*/, 4];
                        return [4 /*yield*/, prisma.carts.findMany({
                                select: {
                                    quantity: true,
                                    products: {
                                        select: {
                                            name: true,
                                            price: true,
                                            description: true,
                                            image: true,
                                            stock: true
                                        }
                                    }
                                },
                                where: {
                                    users: {
                                        user_id: user.user_id
                                    },
                                }
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [2 /*return*/, ' '];
                }
            });
        });
    };
    Cart.prototype.delete = function (user_id, product_id) {
        return __awaiter(this, void 0, void 0, function () {
            var cart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkDuplicateEntry(user_id, product_id)];
                    case 1:
                        cart = _a.sent();
                        return [4 /*yield*/, prisma.carts.delete({
                                where: {
                                    cart_id: cart === null || cart === void 0 ? void 0 : cart.cart_id
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Cart;
}()))();
