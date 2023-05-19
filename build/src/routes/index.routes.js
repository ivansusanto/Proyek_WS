"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_carts_1 = __importDefault(require("./router.carts"));
var router_developers_1 = __importDefault(require("./router.developers"));
var router_orders_1 = __importDefault(require("./router.orders"));
var router_products_1 = __importDefault(require("./router.products"));
var router_users_1 = __importDefault(require("./router.users"));
var AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
var apiRouter = express_1.default.Router();
apiRouter.use('/assets', express_1.default.static('./uploads'));
apiRouter.use('/developers', router_developers_1.default);
apiRouter.use(AuthMiddleware_1.AuthMiddleware);
apiRouter.use('/carts', router_carts_1.default);
apiRouter.use('/orders', router_orders_1.default);
apiRouter.use('/products', router_products_1.default);
apiRouter.use('/users', router_users_1.default);
exports.default = apiRouter;
