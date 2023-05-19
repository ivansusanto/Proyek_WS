"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
var generateId = function (format, count) {
    var newIdNumber = (count + 1).toString();
    return format.toUpperCase() + newIdNumber.padStart(4, "0");
};
exports.generateId = generateId;
