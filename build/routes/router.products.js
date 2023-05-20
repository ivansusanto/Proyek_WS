"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Multer_1 = __importDefault(require("../validations/Multer"));
var AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
var router = (0, express_1.Router)();
var upload = Multer_1.default;
var productsController_1 = require("../controllers/productsController");
router.post('/', [upload.single('image'), AuthMiddleware_1.AuthMiddleware], productsController_1.addProduct);
router.get('/', productsController_1.fetchProduct);
router.get('/:product_id', productsController_1.fetchProductById);
router.put('/:product_id', [upload.single('image'), AuthMiddleware_1.AuthMiddleware], productsController_1.updateProduct);
exports.default = router;
