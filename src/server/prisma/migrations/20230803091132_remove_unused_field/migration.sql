/*
  Warnings:

  - You are about to drop the column `wordId` on the `Task` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diffId" INTEGER NOT NULL,
    "langId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "Task_diffId_fkey" FOREIGN KEY ("diffId") REFERENCES "Difficulity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_langId_fkey" FOREIGN KEY ("langId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("description", "diffId", "id", "langId") SELECT "description", "diffId", "id", "langId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
