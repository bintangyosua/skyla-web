/*
  Warnings:

  - Added the required column `nsfw` to the `Command` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Command" ADD COLUMN     "nsfw" BOOLEAN NOT NULL;
