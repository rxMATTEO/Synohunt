-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Money" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "value" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "Money_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Money" ("id", "userId", "value") SELECT "id", "userId", "value" FROM "Money";
DROP TABLE "Money";
ALTER TABLE "new_Money" RENAME TO "Money";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
