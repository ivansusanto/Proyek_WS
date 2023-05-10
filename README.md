====SETUP====
npm i -> Install node modules

// Minta .env
npx prisma migrate reset -> Bikin db migrate database

npm run start -> Menjalankan nodemon

====================================================================

====BUAT MIGRATE FILES====

npx prisma db pull -> Mengubah db ke models
npx prisma db push -> Mengubah models ke db

npx prisma migrate dev --name <nama sesuai perubahan> -> Menambah versi migration yang baru
npx prisma migrate reset -> Mengupdate struktur db menjadi yang versi terbaru