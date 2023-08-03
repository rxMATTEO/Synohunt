/*
  Warnings:

  - You are about to drop the column `synonymId` on the `Word` table. All the data in the column will be lost.
  - Added the required column `wordId` to the `Synonym` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Synonym" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wordId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "Synonym_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Synonym" ("id", "value") SELECT "id", "value" FROM "Synonym";
DROP TABLE "Synonym";
ALTER TABLE "new_Synonym" RENAME TO "Synonym";
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskId" INTEGER NOT NULL,
    "word" TEXT NOT NULL
);
INSERT INTO "new_Word" ("id", "taskId", "word") SELECT "id", "taskId", "word" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
