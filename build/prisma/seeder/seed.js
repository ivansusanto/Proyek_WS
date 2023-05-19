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
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var Bcrypt_1 = require("../../src/utils/Bcrypt");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //DEVELOPER
                return [4 /*yield*/, prisma.developers.upsert({
                        where: { developer_id: 'D0001' },
                        update: {},
                        create: {
                            developer_id: "D0001",
                            username: "feb",
                            password: (0, Bcrypt_1.generateHashedPassword)("123"),
                            email: "febrian@gmail.com",
                            full_name: "Febrian Alexandro",
                            display_name: "Febrian",
                            status: 1
                        },
                    })];
                case 1:
                    //DEVELOPER
                    _a.sent();
                    return [4 /*yield*/, prisma.developers.upsert({
                            where: { developer_id: 'D0002' },
                            update: {},
                            create: {
                                developer_id: "D0002",
                                username: "flp",
                                password: (0, Bcrypt_1.generateHashedPassword)("123"),
                                email: "felicia@gmail.com",
                                full_name: "Felicia Pangestu",
                                display_name: "Felicia",
                                status: 1
                            },
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.developers.upsert({
                            where: { developer_id: 'D0003' },
                            update: {},
                            create: {
                                developer_id: "D0003",
                                username: "van",
                                password: (0, Bcrypt_1.generateHashedPassword)("123"),
                                email: "ivan@gmail.com",
                                full_name: "Ivan Susanto",
                                display_name: "Ivan",
                                status: 1
                            },
                        })
                        //PRODUCT
                    ];
                case 3:
                    _a.sent();
                    //PRODUCT
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0001' },
                            update: {},
                            create: {
                                product_id: 'P0001',
                                name: "Adidas POD 1923",
                                description: "Sepatu adidas dengan model yang modernn edisi 1923",
                                price: 1990000,
                                stock: 28,
                                status: 1,
                                developer_id: "D0001",
                                image: "1684061868483-165153553.png"
                            },
                        })];
                case 4:
                    //PRODUCT
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0002' },
                            update: {},
                            create: {
                                product_id: 'P0002',
                                name: "Nike Air Force 1 Tosca",
                                description: "Sepatu nike air force 1 yang dibalut warna hijau tosca yang segar",
                                price: 2100000,
                                stock: 35,
                                status: 1,
                                developer_id: "D0001",
                                image: "1684061872403-279811629.png"
                            },
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0003' },
                            update: {},
                            create: {
                                product_id: 'P0003',
                                name: "Iphone 14 Pro Max",
                                description: "Iphone edisi terbaru yang ada di bumi tahun 2022 yang sangat menawan",
                                price: 23999999,
                                stock: 12,
                                status: 1,
                                developer_id: "D0002",
                                image: "1684061876135-860218727.png"
                            },
                        })];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0004' },
                            update: {},
                            create: {
                                product_id: 'P0004',
                                name: "Samsung S23 Mini",
                                description: "Hp mini kelas menawan keluaran samsung dari korea selatan yang lucu",
                                price: 16789000,
                                stock: 14,
                                status: 1,
                                developer_id: "D0002",
                                image: "1684061879720-183346356.png"
                            },
                        })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0005' },
                            update: {},
                            create: {
                                product_id: 'P0005',
                                name: "Vivo Air Book 5",
                                description: "Laptop dengan kedap suara dan kedap air keluaran vivo",
                                price: 11200000,
                                stock: 11,
                                status: 1,
                                developer_id: "D0003",
                                image: "1684061882963-319971757.png"
                            },
                        })];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0006' },
                            update: {},
                            create: {
                                product_id: 'P0006',
                                name: "ROG Strix",
                                description: "Laptop keluaran asus stuf gaming dengan kipas helikopter terbaru 2023",
                                price: 13900000,
                                stock: 9,
                                status: 1,
                                developer_id: "D0003",
                                image: "1684061886348-571905485.png"
                            },
                        })];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0007' },
                            update: {},
                            create: {
                                product_id: 'P0007',
                                name: "MSi Katana",
                                description: "Laptop keluaran MSi dengan spek terbagus dan terbaik MSi",
                                price: 11234567,
                                stock: 22,
                                status: 1,
                                developer_id: "D0003",
                                image: "1684061890178-96883161.png"
                            },
                        })];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, prisma.products.upsert({
                            where: { product_id: 'P0008' },
                            update: {},
                            create: {
                                product_id: 'P0008',
                                name: "Apple Mac Book",
                                description: "Laptop teringan dan termahal yang ada di dunia keluaran Apple",
                                price: 23999999,
                                stock: 31,
                                status: 1,
                                developer_id: "D0003",
                                image: "1684061894223-14073555.png"
                            },
                        })
                        //USER
                    ];
                case 11:
                    _a.sent();
                    //USER
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0001' },
                            update: {},
                            create: {
                                user_id: "U0001",
                                status: 1,
                                customer_id: "C0001",
                                developer_id: "D0001"
                            },
                        })];
                case 12:
                    //USER
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0002' },
                            update: {},
                            create: {
                                user_id: "U0002",
                                status: 1,
                                customer_id: "C0002",
                                developer_id: "D0001"
                            },
                        })];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0003' },
                            update: {},
                            create: {
                                user_id: "U0003",
                                status: 1,
                                customer_id: "C0001",
                                developer_id: "D0002"
                            },
                        })];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0004' },
                            update: {},
                            create: {
                                user_id: "U0004",
                                status: 1,
                                customer_id: "C0001",
                                developer_id: "D0002"
                            },
                        })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0005' },
                            update: {},
                            create: {
                                user_id: "U0005",
                                status: 1,
                                customer_id: "C0002",
                                developer_id: "D0002"
                            },
                        })];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0006' },
                            update: {},
                            create: {
                                user_id: "U0006",
                                status: 1,
                                customer_id: "C0003",
                                developer_id: "D0002"
                            },
                        })];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0007' },
                            update: {},
                            create: {
                                user_id: "U0007",
                                status: 1,
                                customer_id: "C0001",
                                developer_id: "D0003"
                            },
                        })];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, prisma.users.upsert({
                            where: { user_id: 'U0008' },
                            update: {},
                            create: {
                                user_id: "U0008",
                                status: 1,
                                customer_id: "C0002",
                                developer_id: "D0003"
                            },
                        })
                        //CART
                    ];
                case 19:
                    _a.sent();
                    //CART
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0001' },
                            update: {},
                            create: {
                                cart_id: 'K0001',
                                quantity: 2,
                                user_id: "U0001",
                                product_id: "P0001"
                            },
                        })];
                case 20:
                    //CART
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0002' },
                            update: {},
                            create: {
                                cart_id: 'K0002',
                                quantity: 5,
                                user_id: "U0001",
                                product_id: "P0002"
                            },
                        })];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0003' },
                            update: {},
                            create: {
                                cart_id: 'K0003',
                                quantity: 1,
                                user_id: "U0002",
                                product_id: "P0001"
                            },
                        })];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0004' },
                            update: {},
                            create: {
                                cart_id: 'K0004',
                                quantity: 4,
                                user_id: "U0003",
                                product_id: "P0003"
                            },
                        })];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0005' },
                            update: {},
                            create: {
                                cart_id: 'K0005',
                                quantity: 5,
                                user_id: "U0003",
                                product_id: "P0004"
                            },
                        })];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0006' },
                            update: {},
                            create: {
                                cart_id: 'K0006',
                                quantity: 2,
                                user_id: "U0004",
                                product_id: "P0003"
                            },
                        })];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0007' },
                            update: {},
                            create: {
                                cart_id: 'K0007',
                                quantity: 1,
                                user_id: "U0004",
                                product_id: "P0004"
                            },
                        })];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0008' },
                            update: {},
                            create: {
                                cart_id: 'K0008',
                                quantity: 3,
                                user_id: "U0005",
                                product_id: "P0004"
                            },
                        })];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0009' },
                            update: {},
                            create: {
                                cart_id: 'K0009',
                                quantity: 6,
                                user_id: "U0005",
                                product_id: "P0003"
                            },
                        })];
                case 28:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0010' },
                            update: {},
                            create: {
                                cart_id: 'K0010',
                                quantity: 1,
                                user_id: "U0006",
                                product_id: "P0003"
                            },
                        })];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0011' },
                            update: {},
                            create: {
                                cart_id: 'K0011',
                                quantity: 3,
                                user_id: "U0006",
                                product_id: "P0004"
                            },
                        })];
                case 30:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0012' },
                            update: {},
                            create: {
                                cart_id: 'K0012',
                                quantity: 8,
                                user_id: "U0007",
                                product_id: "P0005"
                            },
                        })];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0013' },
                            update: {},
                            create: {
                                cart_id: 'K0013',
                                quantity: 2,
                                user_id: "U0007",
                                product_id: "P0007"
                            },
                        })];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0014' },
                            update: {},
                            create: {
                                cart_id: 'K0014',
                                quantity: 4,
                                user_id: "U0007",
                                product_id: "P0006"
                            },
                        })];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0015' },
                            update: {},
                            create: {
                                cart_id: 'K0015',
                                quantity: 1,
                                user_id: "U0007",
                                product_id: "P0008"
                            },
                        })];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, prisma.carts.upsert({
                            where: { cart_id: 'K0016' },
                            update: {},
                            create: {
                                cart_id: 'K0016',
                                quantity: 4,
                                user_id: "U0008",
                                product_id: "P0008"
                            },
                        })
                        //ORDER
                        //ORDER_ITEM
                    ];
                case 35:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
