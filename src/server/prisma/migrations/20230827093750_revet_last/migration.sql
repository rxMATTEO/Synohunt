/*
  Warnings:

  - You are about to drop the `_CompletedTaskToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_CompletedTaskToUser_B_index";

-- DropIndex
DROP INDEX "_CompletedTaskToUser_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CompletedTaskToUser";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CompletedTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "taskId" INTEGER NOT NULL,
    CONSTRAINT "CompletedTask_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CompletedTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CompletedTask" ("id", "taskId", "userId") SELECT "id", "taskId", "userId" FROM "CompletedTask";
DROP TABLE "CompletedTask";
ALTER TABLE "new_CompletedTask" RENAME TO "CompletedTask";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
