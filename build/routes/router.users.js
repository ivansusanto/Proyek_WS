"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
var usersController_1 = require("../controllers/usersController");
router.post('/', usersController_1.addUser);
router.put('/:customer_id', usersController_1.updateStatus);
exports.default = router;
