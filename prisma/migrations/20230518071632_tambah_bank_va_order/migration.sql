/*
  Warnings:

  - Added the required column `bank` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `bank` VARCHAR(191) NOT NULL,
    ADD COLUMN `va` VARCHAR(191) NULL;
