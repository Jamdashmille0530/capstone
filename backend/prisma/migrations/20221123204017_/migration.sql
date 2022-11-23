/*
  Warnings:

  - You are about to drop the column `latestRead` on the `Room` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_latestRead_fkey";

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "latestRead",
ADD COLUMN     "latest" TEXT;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_latest_fkey" FOREIGN KEY ("latest") REFERENCES "Messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;
