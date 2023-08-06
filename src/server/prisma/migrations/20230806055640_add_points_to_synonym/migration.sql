-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Synonym" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wordId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "pointsForGuess" INTEGER NOT NULL DEFAULT 5,
    CONSTRAINT "Synonym_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "Word" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Synonym" ("id", "value", "wordId") SELECT "id", "value", "wordId" FROM "Synonym";
DROP TABLE "Synonym";
ALTER TABLE "new_Synonym" RENAME TO "Synonym";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
