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
exports.syncOrderStatus = exports.fetchUserOrder = exports.fetchOrderById = exports.fetchOrders = exports.paymentOrder = exports.checkoutOrder = void 0;
var joi_1 = __importDefault(require("joi"));
var Validator_1 = __importDefault(require("../validations/Validator"));
var StatusCode_1 = require("../utils/StatusCode");
var User_1 = __importDefault(require("../models/User"));
var Product_1 = __importDefault(require("../models/Product"));
var Cart_1 = __importDefault(require("../models/Cart"));
var Order_1 = __importDefault(require("../models/Order"));
var axios_1 = __importDefault(require("axios"));
var buffer_1 = require("buffer");
var Developer_1 = __importDefault(require("../models/Developer"));
var env_config_1 = __importDefault(require("../config/env.config"));
var checkoutSchema = {
    customer_id: joi_1.default.string().required(),
    products_id: joi_1.default.array().required().min(1),
    bank: joi_1.default.string().required(),
    customer_name: joi_1.default.string().required(),
    customer_email: joi_1.default.string().email().required(),
};
/*
    Status 0 = Success dan sudah masuk ke saldo developer
    Status 1 = Success
    Status 2 = Canceled
    Status 3 = Pending / Not Paid
*/
var paymentSchema = {
    invoice: joi_1.default.string().required(),
};
var SERVER_KEY = (0, env_config_1.default)('MIDTRANS_SERVER_KEY');
function checkoutOrder(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, developer, user, listCheckout, qty, total, i, product, cart, Invoice, order, options, i, cart;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    return [4 /*yield*/, (0, Validator_1.default)(checkoutSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    data.bank = data.bank.toLowerCase();
                    if (data.bank != "permata" && data.bank != "bca" && data.bank != "bni" && data.bank != "bri") {
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({
                                message: "Invalid bank name",
                            })];
                    }
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(data.developer)];
                case 2:
                    developer = _a.sent();
                    return [4 /*yield*/, User_1.default.checkCustomerID(data.customer_id, developer.developer_id)];
                case 3:
                    user = _a.sent();
                    if (user == " ")
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: "User id is not registered" })];
                    listCheckout = [];
                    qty = [];
                    total = 0;
                    i = 0;
                    _a.label = 4;
                case 4:
                    if (!(i < data.products_id.length)) return [3 /*break*/, 8];
                    return [4 /*yield*/, Product_1.default.fetchById(req.body.developer, data.products_id[i])];
                case 5:
                    product = _a.sent();
                    if (!product)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: "".concat(data.products_id[i], " is not registered") })];
                    if (product.status == 0)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: "".concat(product.name, " is not available") })];
                    return [4 /*yield*/, Cart_1.default.checkDuplicateEntry(user.user_id, data.products_id[i])];
                case 6:
                    cart = _a.sent();
                    if (!cart)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: "".concat(product.name, " is not in user's cart") })];
                    if (cart.quantity > product.stock)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: "Insufficient Stock on product ".concat(product.name, ". Checkout cancelled") })];
                    listCheckout[i] = {
                        name: product.name,
                        quantity: cart.quantity,
                        subtotal: cart.quantity * product.price
                    };
                    qty.push(cart.quantity);
                    total += cart.quantity * product.price;
                    _a.label = 7;
                case 7:
                    i++;
                    return [3 /*break*/, 4];
                case 8: return [4 /*yield*/, Order_1.default.create(user.user_id, total, data.products_id, qty, data.bank)];
                case 9:
                    Invoice = _a.sent();
                    return [4 /*yield*/, Order_1.default.getOrderByInvoice(Invoice)];
                case 10:
                    order = _a.sent();
                    options = {
                        method: 'POST',
                        url: 'https://api.sandbox.midtrans.com/v2/charge',
                        headers: {
                            accept: 'application/json',
                            'content-type': 'application/json',
                            authorization: 'Basic ' + buffer_1.Buffer.from(SERVER_KEY).toString("base64")
                        },
                        data: {
                            payment_type: 'bank_transfer',
                            transaction_details: {
                                order_id: Invoice,
                                gross_amount: order === null || order === void 0 ? void 0 : order.total
                            },
                            bank_transfer: { bank: data.bank },
                            customer_details: {
                                first_name: data.customer_name,
                                last_name: "",
                                email: data.customer_email,
                                phone: ""
                            }
                        }
                    };
                    axios_1.default.request(options).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var va_number;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (data.bank == "permata") {
                                        va_number = response.data.permata_va_number;
                                    }
                                    else {
                                        va_number = response.data.va_numbers[0].va_number;
                                    }
                                    return [4 /*yield*/, Order_1.default.setVANumber(Invoice, va_number)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.CREATED).json({
                                            invoice: Invoice,
                                            bank: data.bank,
                                            va_number: va_number,
                                            transaction_status: "pending"
                                        })];
                            }
                        });
                    }); }).catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Order_1.default.delete(Invoice)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json(err.message)];
                            }
                        });
                    }); });
                    i = 0;
                    _a.label = 11;
                case 11:
                    if (!(i < data.products_id.length)) return [3 /*break*/, 16];
                    return [4 /*yield*/, Cart_1.default.checkDuplicateEntry(user.user_id, data.products_id[i])];
                case 12:
                    cart = _a.sent();
                    if (!cart) return [3 /*break*/, 15];
                    // SUBTRACT STOCK
                    return [4 /*yield*/, Product_1.default.subtractStock(data.products_id[i], cart.quantity)
                        //DELETE CART
                    ];
                case 13:
                    // SUBTRACT STOCK
                    _a.sent();
                    //DELETE CART
                    return [4 /*yield*/, Cart_1.default.delete(user.user_id, data.products_id[i])];
                case 14:
                    //DELETE CART
                    _a.sent();
                    _a.label = 15;
                case 15:
                    i++;
                    return [3 /*break*/, 11];
                case 16: return [2 /*return*/];
            }
        });
    });
}
exports.checkoutOrder = checkoutOrder;
function paymentOrder(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, developer, order, options, error_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    return [4 /*yield*/, (0, Validator_1.default)(paymentSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(data.developer)];
                case 3:
                    developer = _a.sent();
                    return [4 /*yield*/, Order_1.default.fetchOrderByDeveloperIdInvoice(developer.developer_id, data.invoice)];
                case 4:
                    order = _a.sent();
                    if (order.length == 0) {
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).json({ message: "Invalid invoice number" })];
                    }
                    options = {
                        method: 'GET',
                        url: "https://api.sandbox.midtrans.com/v2/".concat(data.invoice, "/status"),
                        headers: {
                            accept: 'application/json',
                            'content-type': 'application/json',
                            authorization: 'Basic ' + buffer_1.Buffer.from(SERVER_KEY).toString("base64")
                        }
                    };
                    axios_1.default.request(options).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, res.status(StatusCode_1.StatusCode.OK).json({
                                    invoice: data.invoice,
                                    transaction_status: response.data.transaction_status
                                })];
                        });
                    }); }).catch(function (err) {
                        return res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json(err.message);
                    });
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json({
                            message: "Internal Server Error"
                        })];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.paymentOrder = paymentOrder;
function fetchOrders(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, developer, order;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(data.developer)];
                case 1:
                    developer = _a.sent();
                    return [4 /*yield*/, Order_1.default.fetchAllOrderByDeveloperId(developer.developer_id)];
                case 2:
                    order = _a.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.OK).json(order)];
            }
        });
    });
}
exports.fetchOrders = fetchOrders;
function fetchOrderById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, invoice, developer, detailOrder;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    invoice = req.params.invoice;
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(data.developer)];
                case 1:
                    developer = _a.sent();
                    return [4 /*yield*/, Order_1.default.fetchDetailOrder(developer.developer_id, invoice)];
                case 2:
                    detailOrder = _a.sent();
                    if (detailOrder.length == 0)
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).json({ message: "Invalid invoice number" })];
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.OK).json(detailOrder)];
            }
        });
    });
}
exports.fetchOrderById = fetchOrderById;
function fetchUserOrder(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, customer_id, developer, user, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    data = req.body;
                    customer_id = req.params.customer_id;
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(data.developer)];
                case 1:
                    developer = _c.sent();
                    return [4 /*yield*/, User_1.default.checkCustomerID(customer_id, developer.developer_id)];
                case 2:
                    user = _c.sent();
                    if (user === ' ')
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.NOT_FOUND).send({ message: 'User not found!' })];
                    _b = (_a = res.status(StatusCode_1.StatusCode.OK)).json;
                    return [4 /*yield*/, Order_1.default.fetchOrderByCustomer(developer.developer_id, customer_id)];
                case 3: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
            }
        });
    });
}
exports.fetchUserOrder = fetchUserOrder;
function syncOrderStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, transaction_status, order_id, status, order, developer;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, transaction_status = _a.transaction_status, order_id = _a.order_id;
                    if (!transaction_status || !order_id)
                        return [2 /*return*/, res.status(403).json({ message: "Forbidden" })];
                    status = transaction_status === 'settlement' ? 1 : transaction_status === 'pending' ? 3 : 2;
                    return [4 /*yield*/, Order_1.default.getOrderByInvoice(order_id)];
                case 1:
                    order = _b.sent();
                    if (!(order.status === 3 && status === 1)) return [3 /*break*/, 4];
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(req.body.developer)];
                case 2:
                    developer = _b.sent();
                    return [4 /*yield*/, Developer_1.default.updateBalance(developer.developer_id, order.total * 0.9)];
                case 3:
                    _b.sent(); // bussiness moidel 10% tax
                    status = 0;
                    _b.label = 4;
                case 4: return [4 /*yield*/, Order_1.default.changeStatusOrder(order_id, status)];
                case 5:
                    _b.sent();
                    return [2 /*return*/, res.status(200).json({ message: "Ok" })];
            }
        });
    });
}
exports.syncOrderStatus = syncOrderStatus;
/*
    {
        transaction_status: 'settlement',
        order_id: 'INV190520230004'
    }
*/ 
