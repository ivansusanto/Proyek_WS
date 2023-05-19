"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var allowedExt = [
    'image/jpg',
    'image/jpeg',
    'image/png'
];
var fileStorage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        var uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        var fileName = uniqueSuffix + '.png';
        if (req.body)
            req.body.image = fileName;
        cb(null, fileName);
    }
});
var fileFilter = function (req, file, cb) {
    if (allowedExt.includes(file.mimetype)) {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
var MulterUpload = (0, multer_1.default)({
    storage: fileStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 50000000
    }
});
exports.default = MulterUpload;
