/*
  Warnings:

  - You are about to drop the column `userId` on the `Money` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Money" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_Money" ("id", "value") SELECT "id", "value" FROM "Money";
DROP TABLE "Money";
ALTER TABLE "new_Money" RENAME TO "Money";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "levelId" INTEGER,
    "points" INTEGER NOT NULL DEFAULT 1,
    "moneyId" INTEGER,
    CONSTRAINT "User_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Level" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_moneyId_fkey" FOREIGN KEY ("moneyId") REFERENCES "Money" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "levelId", "name", "points") SELECT "email", "emailVerified", "id", "image", "levelId", "name", "points" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
