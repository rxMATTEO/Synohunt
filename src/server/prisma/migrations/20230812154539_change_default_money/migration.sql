-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Money" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" INTEGER NOT NULL DEFAULT 50
);
INSERT INTO "new_Money" ("id", "value") SELECT "id", "value" FROM "Money";
DROP TABLE "Money";
ALTER TABLE "new_Money" RENAME TO "Money";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
