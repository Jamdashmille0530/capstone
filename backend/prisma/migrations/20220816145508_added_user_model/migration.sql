-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'APPLICANT', 'SCHOLAR');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "fname" TEXT NOT NULL,
    "mname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "address" TEXT NOT NULL,
    "idPicture" TEXT,
    "gradeSlip" TEXT,
    "enrollmentSlip" TEXT,
    "ncae" TEXT,
    "electricBill" TEXT,
    "waterBill" TEXT,
    "telephoneBill" TEXT,
    "psa" TEXT,
    "indigency" TEXT,
    "autobiography" TEXT,
    "pantawidId" TEXT,
    "sketchAdress" TEXT,
    "role" "Role" NOT NULL DEFAULT 'APPLICANT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
