-- CreateTable
CREATE TABLE "_CompletedTaskToUser" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CompletedTaskToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CompletedTask" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CompletedTaskToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CompletedTask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "taskId" INTEGER NOT NULL,
    CONSTRAINT "CompletedTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CompletedTask" ("id", "taskId", "userId") SELECT "id", "taskId", "userId" FROM "CompletedTask";
DROP TABLE "CompletedTask";
ALTER TABLE "new_CompletedTask" RENAME TO "CompletedTask";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_CompletedTaskToUser_AB_unique" ON "_CompletedTaskToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CompletedTaskToUser_B_index" ON "_CompletedTaskToUser"("B");
