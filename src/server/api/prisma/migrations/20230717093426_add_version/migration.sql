-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "repo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vuls" TEXT NOT NULL DEFAULT '',
    "status" TEXT NOT NULL DEFAULT 'Ожидает исполнения',
    "comm" TEXT NOT NULL DEFAULT '',
    "version" TEXT NOT NULL DEFAULT '',
    "decision" TEXT
);
INSERT INTO "new_Package" ("comm", "decision", "id", "name", "repo", "status", "vuls") SELECT "comm", "decision", "id", "name", "repo", "status", "vuls" FROM "Package";
DROP TABLE "Package";
ALTER TABLE "new_Package" RENAME TO "Package";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
