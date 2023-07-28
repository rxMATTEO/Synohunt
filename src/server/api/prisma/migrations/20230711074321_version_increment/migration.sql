/*
  Warnings:

  - The primary key for the `versions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `versions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_versions" (
    "version_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);
INSERT INTO "new_versions" ("value", "version_id") SELECT "value", "version_id" FROM "versions";
DROP TABLE "versions";
ALTER TABLE "new_versions" RENAME TO "versions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
