/*
  Warnings:

  - Added the required column `developer_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `developer_id` VARCHAR(5) NOT NULL;

-- CreateIndex
CREATE INDEX `developer_id` ON `users`(`developer_id`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`developer_id`) REFERENCES `developers`(`developer_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
