/*
  Warnings:

  - A unique constraint covering the columns `[userId,concertId,status]` on the table `Reservation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Reservation_userId_concertId_key";

-- CreateIndex
CREATE INDEX "Reservation_concertId_idx" ON "Reservation"("concertId");

-- CreateIndex
CREATE INDEX "Reservation_userId_idx" ON "Reservation"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Reservation_userId_concertId_status_key" ON "Reservation"("userId", "concertId", "status");
