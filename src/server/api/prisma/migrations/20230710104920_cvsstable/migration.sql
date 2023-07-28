-- CreateTable
CREATE TABLE "cvss" (
    "cvss_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cvss_vector" TEXT NOT NULL,
    "cvss_score" DECIMAL NOT NULL
);
