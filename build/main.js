"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_routes_1 = __importDefault(require("./routes/index.routes"));
var StatusCode_1 = require("./utils/StatusCode");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', index_routes_1.default);
app.all('*', function (req, res) {
    return res.status(StatusCode_1.StatusCode.NOT_FOUND).json({
        message: 'Hayooo ngapain',
    });
});
var port = 3000;
app.listen(port, function () { return console.log("Listening on port ".concat(port, "!")); });
