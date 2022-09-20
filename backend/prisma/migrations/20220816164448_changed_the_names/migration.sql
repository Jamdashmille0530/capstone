/*
  Warnings:

  - You are about to drop the column `electricBill` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `enrollmentSlip` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `psa` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telephoneBill` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `waterBill` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "electricBill",
DROP COLUMN "enrollmentSlip",
DROP COLUMN "psa",
DROP COLUMN "telephoneBill",
DROP COLUMN "waterBill",
ADD COLUMN     "bcert" TEXT,
ADD COLUMN     "ebill" TEXT,
ADD COLUMN     "eslip" TEXT,
ADD COLUMN     "tbill" TEXT,
ADD COLUMN     "wbill" TEXT;
