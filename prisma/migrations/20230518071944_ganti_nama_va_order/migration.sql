/*
  Warnings:

  - You are about to drop the column `va` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `orders` DROP COLUMN `va`,
    ADD COLUMN `va_number` VARCHAR(191) NULL;
