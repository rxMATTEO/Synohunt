/*
  Warnings:

  - You are about to drop the column `taskId` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Level` table. All the data in the column will be lost.
  - Added the required column `wordId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL
);
INSERT INTO "new_Word" ("id", "word") SELECT "id", "word" FROM "Word";
DROP TABLE "Word";
ALTER TABLE "new_Word" RENAME TO "Word";
CREATE TABLE "new_Level" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL,
    "groupdId" INTEGER NOT NULL,
    CONSTRAINT "Level_groupdId_fkey" FOREIGN KEY ("groupdId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Level" ("groupdId", "id", "value") SELECT "groupdId", "id", "value" FROM "Level";
DROP TABLE "Level";
ALTER TABLE "new_Level" RENAME TO "Level";
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diffId" INTEGER NOT NULL,
    "langId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "wordId" INTEGER NOT NULL,
    CONSTRAINT "Task_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_diffId_fkey" FOREIGN KEY ("diffId") REFERENCES "Difficulity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_langId_fkey" FOREIGN KEY ("langId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("description", "diffId", "id", "langId") SELECT "description", "diffId", "id", "langId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
