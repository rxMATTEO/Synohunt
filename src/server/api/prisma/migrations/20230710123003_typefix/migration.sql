/*
  Warnings:

  - You are about to drop the column `venodr_id` on the `os` table. All the data in the column will be lost.
  - Added the required column `vendor_id` to the `os` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_os" (
    "os_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "os" TEXT NOT NULL,
    "vendor_id" INTEGER NOT NULL
);
INSERT INTO "new_os" ("os", "os_id") SELECT "os", "os_id" FROM "os";
DROP TABLE "os";
ALTER TABLE "new_os" RENAME TO "os";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
