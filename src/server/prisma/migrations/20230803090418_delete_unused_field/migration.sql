/*
  Warnings:

  - You are about to drop the column `wordId` on the `Synonym` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Synonym" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);
INSERT INTO "new_Synonym" ("id", "value") SELECT "id", "value" FROM "Synonym";
DROP TABLE "Synonym";
ALTER TABLE "new_Synonym" RENAME TO "Synonym";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
