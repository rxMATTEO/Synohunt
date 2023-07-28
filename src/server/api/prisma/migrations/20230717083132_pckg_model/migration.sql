-- CreateTable
CREATE TABLE "Package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "repo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vuls" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "comm" TEXT NOT NULL,
    "decision" TEXT NOT NULL
);
