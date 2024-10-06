/*
  Warnings:

  - You are about to drop the column `isLocked` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "isLocked",
ADD COLUMN     "expiredAt" TEXT,
ADD COLUMN     "publicUrl" TEXT;
