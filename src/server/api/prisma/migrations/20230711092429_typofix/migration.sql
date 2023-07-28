/*
  Warnings:

  - You are about to drop the column `platforms` on the `platforms` table. All the data in the column will be lost.
  - Added the required column `platform` to the `platforms` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_platforms" (
    "platform_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "platform" TEXT NOT NULL
);
INSERT INTO "new_platforms" ("platform_id") SELECT "platform_id" FROM "platforms";
DROP TABLE "platforms";
ALTER TABLE "new_platforms" RENAME TO "platforms";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
