/*
  Warnings:

  - Made the column `registrationDate` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "levelId" INTEGER,
    "points" INTEGER NOT NULL DEFAULT 1,
    "moneyId" INTEGER,
    "registrationDate" INTEGER NOT NULL,
    CONSTRAINT "User_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_moneyId_fkey" FOREIGN KEY ("moneyId") REFERENCES "Money" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "levelId", "moneyId", "name", "points", "registrationDate") SELECT "email", "emailVerified", "id", "image", "levelId", "moneyId", "name", "points", "registrationDate" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
