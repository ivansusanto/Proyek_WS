"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
var router = (0, express_1.Router)();
var ordersController_1 = require("../controllers/ordersController");
router.post('/sync', ordersController_1.syncOrderStatus);
router.use(AuthMiddleware_1.AuthMiddleware);
router.post('/checkout', ordersController_1.checkoutOrder);
router.post('/payment', ordersController_1.paymentOrder);
router.get('/', ordersController_1.fetchOrders);
router.get('/:invoice/details', ordersController_1.fetchOrderById);
router.get('/:customer_id', ordersController_1.fetchUserOrder);
exports.default = router;
