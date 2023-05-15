/*
  Warnings:

  - The primary key for the `carts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carts_id` on the `carts` table. All the data in the column will be lost.
  - Added the required column `cart_id` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `carts` DROP PRIMARY KEY,
    DROP COLUMN `carts_id`,
    ADD COLUMN `cart_id` VARCHAR(5) NOT NULL,
    ADD PRIMARY KEY (`cart_id`);
