-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Group" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "min" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "multiplier" INTEGER NOT NULL DEFAULT 10
);
INSERT INTO "new_Group" ("id", "max", "min", "name") SELECT "id", "max", "min", "name" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
