import { PrismaClient } from '@prisma/client'
import { generateHashedPassword } from '../../src/utils/Bcrypt'
const prisma = new PrismaClient()

async function main() {
    //DEVELOPER
    await prisma.developers.upsert({
        where: { developer_id: 'D0001' },
        update: {},
        create: {
            developer_id: "D0001",
            username: "feb",
            password: generateHashedPassword("123"),
            email: "febrian@gmail.com",
            full_name: "Febrian Alexandro",
            display_name: "Febrian",
            status: 1
        },
     })
    await prisma.developers.upsert({
        where: { developer_id: 'D0002' },
        update: {},
        create: {
            developer_id: "D0002",
            username: "flp",
            password: generateHashedPassword("123"),
            email: "felicia@gmail.com",
            full_name: "Felicia Pangestu",
            display_name: "Felicia",
            status: 1
        },
    })
    await prisma.developers.upsert({
        where: { developer_id: 'D0003' },
        update: {},
        create: {
            developer_id: "D0003",
            username: "van",
            password: generateHashedPassword("123"),
            email: "ivan@gmail.com",
            full_name: "Ivan Susanto",
            display_name: "Ivan",
            status: 1
        },
    })

    //PRODUCT
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    })
    await prisma.products.upsert({
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
    await prisma.users.upsert({
        where: { user_id: 'U0001' },
        update: {},
        create: {
            user_id: "U0001",
            status: 1,
            customer_id: "C0001",
            developer_id: "D0001"
        },
    })
    await prisma.users.upsert({
        where: { user_id: 'U0002' },
        update: {},
        create: {
            user_id: "U0002",
            status: 1,
            customer_id: "C0002",
            developer_id: "D0001"
        },
    })
    await prisma.users.upsert({
        where: { user_id: 'U0003' },
        update: {},
        create: {
            user_id: "U0003",
            status: 1,
            customer_id: "C0001",
            developer_id: "D0002"
        },
    })
    await prisma.users.upsert({
        where: { user_id: 'U0004' },
        update: {},
        create: {
            user_id: "U0004",
            status: 1,
            customer_id: "C0001",
            developer_id: "D0002"
        },
    })
    await prisma.users.upsert({
        where: { user_id: 'U0005' },
        update: {},
        create: {
            user_id: "U0005",
            status: 1,
            customer_id: "C0002",
            developer_id: "D0002"
        },
    })
    await prisma.users.upsert({
        where: { user_id: 'U0006' },
        update: {},
        create: {
            user_id: "U0006",
            status: 1,
            customer_id: "C0003",
            developer_id: "D0002"
        },
    })
    await prisma.users.upsert({
        where: { user_id: 'U0007' },
        update: {},
        create: {
            user_id: "U0007",
            status: 1,
            customer_id: "C0001",
            developer_id: "D0003"
        },
    })
    await prisma.users.upsert({
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
    await prisma.carts.upsert({
        where: { cart_id: 'K0001' },
        update: {},
        create: {
            cart_id: 'K0001',
            quantity: 2,
            user_id: "U0001",
            product_id: "P0001"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0002' },
        update: {},
        create: {
            cart_id: 'K0002',
            quantity: 5,
            user_id: "U0001",
            product_id: "P0003"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0003' },
        update: {},
        create: {
            cart_id: 'K0003',
            quantity: 1,
            user_id: "U0002",
            product_id: "P0007"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0004' },
        update: {},
        create: {
            cart_id: 'K0004',
            quantity: 4,
            user_id: "U0003",
            product_id: "P0002"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0005' },
        update: {},
        create: {
            cart_id: 'K0005',
            quantity: 5,
            user_id: "U0003",
            product_id: "P0004"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0006' },
        update: {},
        create: {
            cart_id: 'K0006',
            quantity: 2,
            user_id: "U0003",
            product_id: "P0001"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0007' },
        update: {},
        create: {
            cart_id: 'K0007',
            quantity: 1,
            user_id: "U0004",
            product_id: "P0003"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0008' },
        update: {},
        create: {
            cart_id: 'K0008',
            quantity: 3,
            user_id: "U0005",
            product_id: "P0008"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0009' },
        update: {},
        create: {
            cart_id: 'K0009',
            quantity: 6,
            user_id: "U0005",
            product_id: "P0005"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0010' },
        update: {},
        create: {
            cart_id: 'K0010',
            quantity: 1,
            user_id: "U0006",
            product_id: "P0003"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0011' },
        update: {},
        create: {
            cart_id: 'K0011',
            quantity: 3,
            user_id: "U0006",
            product_id: "P0006"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0012' },
        update: {},
        create: {
            cart_id: 'K0012',
            quantity: 8,
            user_id: "U0006",
            product_id: "P0002"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0013' },
        update: {},
        create: {
            cart_id: 'K0013',
            quantity: 2,
            user_id: "U0006",
            product_id: "P0007"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0014' },
        update: {},
        create: {
            cart_id: 'K0014',
            quantity: 4,
            user_id: "U0007",
            product_id: "P0007"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0015' },
        update: {},
        create: {
            cart_id: 'K0015',
            quantity: 1,
            user_id: "U0007",
            product_id: "P0008"
        },
    })
    await prisma.carts.upsert({
        where: { cart_id: 'K0016' },
        update: {},
        create: {
            cart_id: 'K0016',
            quantity: 4,
            user_id: "U0008",
            product_id: "P0001"
        },
    })

    //ORDER


    //ORDER_ITEM


}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})