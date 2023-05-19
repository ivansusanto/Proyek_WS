"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
var router = (0, express_1.Router)();
var developersController_1 = require("../controllers/developersController");
router.post('/register', developersController_1.registerDeveloper);
router.post('/login', developersController_1.loginDeveloper);
router.post('/withdrawal', AuthMiddleware_1.AuthMiddleware, developersController_1.withdrawalDeveloper);
exports.default = router;
