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
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var GenerateId_1 = require("../utils/GenerateId");
var prisma = new client_1.PrismaClient();
exports.default = new (/** @class */ (function () {
    function Product() {
    }
    Product.prototype.create = function (product, developer_id) {
        return __awaiter(this, void 0, void 0, function () {
            var product_id, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = GenerateId_1.generateId;
                        _b = ['P'];
                        return [4 /*yield*/, prisma.products.count()];
                    case 1:
                        product_id = _a.apply(void 0, _b.concat([_c.sent()]));
                        return [4 /*yield*/, prisma.products.create({
                                data: {
                                    product_id: product_id,
                                    name: product.name,
                                    description: product.description,
                                    price: parseInt(product.price.toString()),
                                    stock: parseInt(product.stock.toString()),
                                    image: product.image,
                                    developers: {
                                        connect: {
                                            developer_id: developer_id
                                        }
                                    }
                                }
                            })];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    Product.prototype.get = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.products.findMany({
                            select: {
                                product_id: true,
                                name: true,
                                description: true,
                                price: true,
                                stock: true,
                                status: true,
                                image: true
                            },
                            where: {
                                developers: {
                                    username: username
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, (_a.sent()) || []];
                }
            });
        });
    };
    Product.prototype.update = function (product, username, product_id) {
        return __awaiter(this, void 0, void 0, function () {
            var developer_id, product_developer_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.developers.findFirst({
                            select: {
                                developer_id: true
                            },
                            where: {
                                username: username
                            }
                        })];
                    case 1:
                        developer_id = _a.sent();
                        return [4 /*yield*/, prisma.products.findFirst({
                                select: {
                                    developer_id: true
                                },
                                where: {
                                    product_id: product_id
                                }
                            })];
                    case 2:
                        product_developer_id = _a.sent();
                        if (!product_developer_id)
                            return [2 /*return*/, false];
                        if (developer_id && product_developer_id && developer_id.developer_id !== product_developer_id.developer_id)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, prisma.products.update({
                                where: {
                                    product_id: product_id,
                                },
                                data: product
                            })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Product.prototype.fetchById = function (username, product_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.products.findFirst({
                            select: {
                                product_id: true,
                                name: true,
                                description: true,
                                price: true,
                                stock: true,
                                status: true,
                                image: true
                            },
                            where: {
                                product_id: product_id,
                                developers: {
                                    username: username
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Product.prototype.fetchByProductId = function (product_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.products.findFirst({
                            where: {
                                product_id: product_id
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Product.prototype.updateProductStockByProductId = function (product_id, stock) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.products.update({
                            where: {
                                product_id: product_id
                            },
                            data: {
                                stock: stock
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Product.prototype.subtractStock = function (product_id, subtractor) {
        return __awaiter(this, void 0, void 0, function () {
            var product, updatedStock;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchByProductId(product_id)];
                    case 1:
                        product = _a.sent();
                        if (product) {
                            updatedStock = product.stock - subtractor;
                            this.updateProductStockByProductId(product_id, updatedStock);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return Product;
}()))();
