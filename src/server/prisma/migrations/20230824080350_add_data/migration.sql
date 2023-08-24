/*
  Warnings:

  - Added the required column `data` to the `Credentials` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Credentials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL,
    "data" TEXT NOT NULL
);
INSERT INTO "new_Credentials" ("email", "id", "privateKey", "publicKey") SELECT "email", "id", "privateKey", "publicKey" FROM "Credentials";
DROP TABLE "Credentials";
ALTER TABLE "new_Credentials" RENAME TO "Credentials";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
