/*
  Warnings:

  - The primary key for the `Calendar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `eventId` on the `Calendar` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Calendar` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP CONSTRAINT "Calendar_pkey",
DROP COLUMN "eventId";

-- CreateIndex
CREATE UNIQUE INDEX "Calendar_id_key" ON "Calendar"("id");
