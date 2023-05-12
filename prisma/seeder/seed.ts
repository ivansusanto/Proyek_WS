import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const febrian = await prisma.developers.upsert({
    where: { developer_id: 'D0001' },
    update: {},
    create: {
        developer_id: "D0001",
        username: "febrianjelek",
        password: "123",
        email: "febrian@gmail.com",
        full_name: "Febrian Alexandro",
        display_name: "Febrian",
        status: 1
    },
  })
  const felicia = await prisma.developers.upsert({
    where: { developer_id: 'D0002' },
    update: {},
    create: {
        developer_id: "D0002",
        username: "flp",
        password: "123",
        email: "felicia@gmail.com",
        full_name: "Felicia Pangestu",
        display_name: "Felicia",
        status: 1
    },
  })
  const ivan = await prisma.developers.upsert({
    where: { developer_id: 'D0003' },
    update: {},
    create: {
        developer_id: "D0003",
        username: "van",
        password: "123",
        email: "ivan@gmail.com",
        full_name: "Ivan Susanto",
        display_name: "Ivan",
        status: 1
    },
  })
//   console.log({ febrian, felicia, ivan })
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