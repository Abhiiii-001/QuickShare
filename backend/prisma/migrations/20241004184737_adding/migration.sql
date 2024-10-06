-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "isLocked" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL DEFAULT '',
    "duration" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
