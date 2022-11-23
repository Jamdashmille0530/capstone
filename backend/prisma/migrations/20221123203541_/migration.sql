-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "latestRead" TEXT;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_latestRead_fkey" FOREIGN KEY ("latestRead") REFERENCES "Messages"("id") ON DELETE SET NULL ON UPDATE CASCADE;
