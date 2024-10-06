/*
  Warnings:

  - Made the column `expiredAt` on table `File` required. This step will fail if there are existing NULL values in that column.
  - Made the column `publicUrl` on table `File` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "File" ALTER COLUMN "expiredAt" SET NOT NULL,
ALTER COLUMN "publicUrl" SET NOT NULL;
