/*
  Warnings:

  - Added the required column `customer_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `customer_id` VARCHAR(255) NOT NULL;
