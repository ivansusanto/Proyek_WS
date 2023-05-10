-- AlterTable
ALTER TABLE `developers` MODIFY `status` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `orders` MODIFY `status` INTEGER NOT NULL DEFAULT 3;

-- AlterTable
ALTER TABLE `products` MODIFY `status` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `users` MODIFY `status` INTEGER NOT NULL DEFAULT 1;
