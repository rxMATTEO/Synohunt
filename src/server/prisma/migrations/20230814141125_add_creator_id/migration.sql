-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diffId" INTEGER NOT NULL,
    "langId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "wordId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL DEFAULT 'cll7vky900000es24cgt6fkgs',
    "isVisible" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Task_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_diffId_fkey" FOREIGN KEY ("diffId") REFERENCES "Difficulity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_langId_fkey" FOREIGN KEY ("langId") REFERENCES "Language" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("description", "diffId", "id", "isVisible", "langId", "wordId") SELECT "description", "diffId", "id", "isVisible", "langId", "wordId" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
