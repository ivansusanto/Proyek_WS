====SETUP====
npm i -> Install node modules

// Minta .env
npx prisma migrate reset -> Bikin db migrate database

npm run start -> Menjalankan nodemon

====================================================================

====BUAT MIGRATE DATABASE====

npx prisma db pull -> Mengubah db ke models
npx prisma db push -> Mengubah models ke db

npx prisma migrate dev --name <nama sesuai perubahan> -> Menambah versi migration yang baru
npx prisma migrate reset -> Mengupdate struktur db menjadi yang versi terbaru

Database seeding with Prisma -> prisma db seed // Mending langsung pake npx prisma migrate reset -> otomatis seeding

====================================================================

====MIDDLEWARE====

Kalo mau ambil data username developer yg login -> req.body.developer

Kalai mau kasih token di postman -> Masuk di Authorization terus OAuth2 -> Masukkan token, pilih prefix Bearer

====================================================================

====UTILS FUNCTION====
JWT untuk membuat token baru, parameter -> isi data: object, duration expired: string

Bcrypt untuk hash password, parameter -> password: string

GenerateId untuk membuat id baru, parameter -> huruf depan id: string, jumlah data tabel tersebut: number