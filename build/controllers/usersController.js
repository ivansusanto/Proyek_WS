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
exports.updateStatus = exports.addUser = void 0;
var User_1 = __importDefault(require("../models/User"));
var Developer_1 = __importDefault(require("../models/Developer"));
var joi_1 = __importDefault(require("joi"));
var Validator_1 = __importDefault(require("../validations/Validator"));
var StatusCode_1 = require("../utils/StatusCode");
var addUserSchema = {
    customer_id: joi_1.default.string().required()
};
var updateUserSchema = {
    status: joi_1.default.number().required().min(0).max(1)
};
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, validation, developer, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    return [4 /*yield*/, (0, Validator_1.default)(addUserSchema, data)];
                case 1:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(req.body.developer)];
                case 3:
                    developer = _a.sent();
                    if (!developer) {
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json({
                                message: "Internal Server Error"
                            })];
                    }
                    return [4 /*yield*/, User_1.default.checkCustomerID(data.customer_id, developer.developer_id)];
                case 4:
                    if ((_a.sent()) != " ") {
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({
                                message: "customer_id already registered"
                            })];
                    }
                    User_1.default.create(data.customer_id, developer.developer_id);
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.CREATED).json({
                            customer_id: data.customer_id,
                            status: 1
                        })];
                case 5:
                    error_1 = _a.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json({
                            message: "Internal server error: "
                        })];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.addUser = addUser;
;
function updateStatus(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var customer_id, data, developer, validation, status_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    customer_id = req.params.customer_id;
                    data = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, Developer_1.default.fetchByUsername(req.body.developer)];
                case 2:
                    developer = _a.sent();
                    if (!developer) {
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json({
                                message: "Internal Server Error"
                            })];
                    }
                    return [4 /*yield*/, User_1.default.checkCustomerID(customer_id, developer.developer_id)];
                case 3:
                    if ((_a.sent()) == " ") {
                        return [2 /*return*/, res.status(StatusCode_1.StatusCode.BAD_REQUEST).json({
                                message: "User id is not registered"
                            })];
                    }
                    return [4 /*yield*/, (0, Validator_1.default)(updateUserSchema, data)];
                case 4:
                    validation = _a.sent();
                    if (validation.message)
                        return [2 /*return*/, res.status(400).json({ message: validation.message.replace("\"", "").replace("\"", "") })];
                    status_1 = parseInt(data.status);
                    return [4 /*yield*/, User_1.default.update(customer_id, developer.developer_id, status_1)];
                case 5:
                    _a.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.CREATED).json({
                            customer_id: customer_id,
                            status: status_1
                        })];
                case 6:
                    error_2 = _a.sent();
                    return [2 /*return*/, res.status(StatusCode_1.StatusCode.INTERNAL_SERVER).json({
                            message: "Internal server error: "
                        })];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.updateStatus = updateStatus;
;
