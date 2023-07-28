/*
  Warnings:

  - The primary key for the `versions3` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `versions3` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_versions3" (
    "version_id" INTEGER NOT NULL,
    "min" TEXT,
    "max" TEXT,
    "unparsed" TEXT,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_versions3" ("max", "min", "unparsed", "version_id") SELECT "max", "min", "unparsed", "version_id" FROM "versions3";
DROP TABLE "versions3";
ALTER TABLE "new_versions3" RENAME TO "versions3";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
