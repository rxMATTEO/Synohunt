/*
  Warnings:

  - You are about to drop the column `indentifier` on the `cwe` table. All the data in the column will be lost.
  - Added the required column `identifier` to the `cwe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cwe" (
    "cwe_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identifier" TEXT NOT NULL,
    "vul_id" INTEGER NOT NULL
);
INSERT INTO "new_cwe" ("cwe_id", "vul_id") SELECT "cwe_id", "vul_id" FROM "cwe";
DROP TABLE "cwe";
ALTER TABLE "new_cwe" RENAME TO "cwe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
