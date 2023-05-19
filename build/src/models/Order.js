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
    function Order() {
    }
    Order.prototype.create = function (user_id, total, product_id, qty, bank) {
        return __awaiter(this, void 0, void 0, function () {
            var order_id, _a, _b, Invoice, order_items, i, order_item;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = GenerateId_1.generateId;
                        _b = ['O'];
                        return [4 /*yield*/, prisma.orders.count()];
                    case 1:
                        order_id = _a.apply(void 0, _b.concat([_c.sent()]));
                        return [4 /*yield*/, this.createInvoice()];
                    case 2:
                        Invoice = _c.sent();
                        return [4 /*yield*/, prisma.orders.create({
                                data: {
                                    order_id: order_id,
                                    invoice: Invoice,
                                    date: new Date(),
                                    total: total,
                                    users: {
                                        connect: {
                                            user_id: user_id
                                        }
                                    },
                                    bank: bank
                                }
                            })];
                    case 3:
                        _c.sent();
                        order_items = [];
                        for (i = 0; i < product_id.length; i++) {
                            order_item = {
                                quantity: qty[i],
                                order_id: order_id,
                                product_id: product_id[i],
                            };
                            order_items.push(order_item);
                        }
                        return [4 /*yield*/, prisma.order_items.createMany({
                                data: order_items
                            })];
                    case 4:
                        _c.sent();
                        return [2 /*return*/, Invoice];
                }
            });
        });
    };
    Order.prototype.setVANumber = function (Invoice, va_number) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.updateMany({
                            where: {
                                invoice: Invoice
                            },
                            data: {
                                va_number: va_number
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Order.prototype.createInvoice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, dateString, order, count, orderDate, Invoice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        dateString = date.getDate().toString().padStart(2, "0") + (date.getMonth() + 1).toString().padStart(2, "0") + date.getFullYear().toString();
                        return [4 /*yield*/, prisma.orders.findFirst({
                                orderBy: {
                                    order_id: 'desc'
                                }
                            })];
                    case 1:
                        order = _a.sent();
                        count = 0;
                        if (!order)
                            count = 1;
                        else {
                            orderDate = order.invoice.substring(3, 11);
                            if (dateString == orderDate)
                                count = parseInt(order.invoice.substring(11)) + 1;
                            else
                                count = 1;
                        }
                        Invoice = "INV" + dateString + count.toString().padStart(4, "0");
                        return [2 /*return*/, Invoice];
                }
            });
        });
    };
    Order.prototype.getOrderByInvoice = function (Invoice) {
        return __awaiter(this, void 0, void 0, function () {
            var order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.findFirst({
                            where: {
                                invoice: Invoice
                            }
                        })];
                    case 1:
                        order = _a.sent();
                        if (order)
                            return [2 /*return*/, order];
                        return [2 /*return*/, null];
                }
            });
        });
    };
    Order.prototype.changeStatusOrder = function (invoice_number) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.updateMany({
                            where: {
                                invoice: invoice_number
                            },
                            data: {
                                status: 1
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Order.prototype.fetchAllOrderByDeveloperId = function (developer_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.findMany({
                            where: {
                                users: {
                                    developer_id: developer_id
                                }
                            },
                            select: {
                                invoice: true,
                                date: true,
                                total: true,
                                status: true,
                                users: {
                                    select: {
                                        customer_id: true
                                    }
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Order.prototype.fetchOrderByDeveloperIdInvoice = function (developer_id, invoice) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.findMany({
                            where: {
                                users: {
                                    developer_id: developer_id
                                },
                                invoice: invoice
                            },
                            select: {
                                invoice: true,
                                date: true,
                                total: true,
                                status: true,
                                bank: true,
                                va_number: true,
                                users: {
                                    select: {
                                        customer_id: true
                                    }
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Order.prototype.fetchDetailOrder = function (developer_id, invoice) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.findMany({
                            where: {
                                users: {
                                    developer_id: developer_id
                                },
                                invoice: invoice
                            },
                            select: {
                                invoice: true,
                                date: true,
                                total: true,
                                status: true,
                                bank: true,
                                va_number: true,
                                users: {
                                    select: {
                                        customer_id: true
                                    }
                                },
                                order_items: {
                                    select: {
                                        products: {
                                            select: {
                                                name: true,
                                                price: true
                                            }
                                        },
                                        quantity: true
                                    }
                                }
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Order.prototype.fetchOrderByCustomer = function (developer_id, customer_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma.orders.findMany({
                            where: {
                                users: {
                                    developer_id: developer_id,
                                    customer_id: customer_id
                                }
                            },
                            select: {
                                invoice: true,
                                date: true,
                                total: true,
                                status: true,
                                bank: true,
                                va_number: true,
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Order;
}()));
