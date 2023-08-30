-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Credentials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "data" TEXT
);
INSERT INTO "new_Credentials" ("data", "email", "id", "privateKey", "publicKey") SELECT "data", "email", "id", "privateKey", "publicKey" FROM "Credentials";
DROP TABLE "Credentials";
ALTER TABLE "new_Credentials" RENAME TO "Credentials";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
