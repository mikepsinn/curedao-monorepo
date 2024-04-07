/*
  Warnings:

  - You are about to drop the column `badges` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `points` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `signature_timestamp` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `signed_petition` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `war_percentage_desired` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `war_percentage_guessed` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "badges",
DROP COLUMN "points",
DROP COLUMN "signature_timestamp",
DROP COLUMN "signed_petition",
DROP COLUMN "war_percentage_desired",
DROP COLUMN "war_percentage_guessed",
ADD COLUMN     "fdai_access_token" TEXT,
ADD COLUMN     "fdai_access_token_expires_at" TIMESTAMP(3),
ADD COLUMN     "fdai_expires_in" INTEGER,
ADD COLUMN     "fdai_refresh_token" TEXT,
ADD COLUMN     "fdai_scope" TEXT,
ADD COLUMN     "fdai_user_id" INTEGER;
