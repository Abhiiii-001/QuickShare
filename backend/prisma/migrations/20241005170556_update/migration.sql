/*
  Warnings:

  - Changed the type of `createdAt` on the `File` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "password" DROP DEFAULT,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;
