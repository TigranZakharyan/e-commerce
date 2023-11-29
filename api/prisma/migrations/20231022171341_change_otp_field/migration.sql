/*
  Warnings:

  - You are about to drop the column `verificationCode` on the `user` table. All the data in the column will be lost.
  - Added the required column `otp` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "verificationCode",
ADD COLUMN     "otp" INTEGER NOT NULL;
