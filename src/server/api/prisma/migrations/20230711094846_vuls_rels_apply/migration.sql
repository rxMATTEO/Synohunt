/*
  Warnings:

  - The primary key for the `versions3` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `versions3` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_versions3" (
    "version_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "min" TEXT,
    "max" TEXT,
    "unparsed" TEXT
);
INSERT INTO "new_versions3" ("max", "min", "unparsed", "version_id") SELECT "max", "min", "unparsed", "version_id" FROM "versions3";
DROP TABLE "versions3";
ALTER TABLE "new_versions3" RENAME TO "versions3";
CREATE TABLE "new_vulnerabilities" (
    "vul_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "identify_date" TEXT NOT NULL,
    "cvss_id" INTEGER NOT NULL,
    "severity_id" INTEGER NOT NULL,
    "solution_id" INTEGER NOT NULL,
    "vul_status_id" INTEGER NOT NULL,
    "exploit_status_id" INTEGER NOT NULL,
    "fix_status_id" INTEGER NOT NULL,
    "sources" TEXT,
    "other" TEXT,
    CONSTRAINT "vulnerabilities_solution_id_fkey" FOREIGN KEY ("solution_id") REFERENCES "solutions" ("solution_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_vul_status_id_fkey" FOREIGN KEY ("vul_status_id") REFERENCES "vul_statuses" ("vul_status_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_exploit_status_id_fkey" FOREIGN KEY ("exploit_status_id") REFERENCES "exploit_statuses" ("exploit_status_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_fix_status_id_fkey" FOREIGN KEY ("fix_status_id") REFERENCES "fix_statuses" ("fix_status_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_cvss_id_fkey" FOREIGN KEY ("cvss_id") REFERENCES "cvss" ("cvss_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_severity_id_fkey" FOREIGN KEY ("severity_id") REFERENCES "severity" ("severity_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vulnerabilities" ("cvss_id", "description", "exploit_status_id", "fix_status_id", "identifier", "identify_date", "name", "other", "severity_id", "solution_id", "sources", "vul_id", "vul_status_id") SELECT "cvss_id", "description", "exploit_status_id", "fix_status_id", "identifier", "identify_date", "name", "other", "severity_id", "solution_id", "sources", "vul_id", "vul_status_id" FROM "vulnerabilities";
DROP TABLE "vulnerabilities";
ALTER TABLE "new_vulnerabilities" RENAME TO "vulnerabilities";
CREATE TABLE "new_vulnerabilities_soft" (
    "vul_soft_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vul_id" INTEGER NOT NULL,
    "soft_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL,
    CONSTRAINT "vulnerabilities_soft_vul_id_fkey" FOREIGN KEY ("vul_id") REFERENCES "vulnerabilities" ("vul_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_soft_soft_id_fkey" FOREIGN KEY ("soft_id") REFERENCES "soft" ("soft_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_soft_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions3" ("version_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vulnerabilities_soft" ("soft_id", "version_id", "vul_id", "vul_soft_id") SELECT "soft_id", "version_id", "vul_id", "vul_soft_id" FROM "vulnerabilities_soft";
DROP TABLE "vulnerabilities_soft";
ALTER TABLE "new_vulnerabilities_soft" RENAME TO "vulnerabilities_soft";
CREATE TABLE "new_vulnerabilities_os" (
    "os_version_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "version_id" INTEGER NOT NULL,
    "os_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL,
    "vul_id" INTEGER NOT NULL,
    CONSTRAINT "vulnerabilities_os_version_id_fkey" FOREIGN KEY ("version_id") REFERENCES "versions3" ("version_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_os_os_id_fkey" FOREIGN KEY ("os_id") REFERENCES "os" ("os_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_os_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "platforms" ("platform_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "vulnerabilities_os_vul_id_fkey" FOREIGN KEY ("vul_id") REFERENCES "vulnerabilities" ("vul_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_vulnerabilities_os" ("os_id", "os_version_id", "platform_id", "version_id", "vul_id") SELECT "os_id", "os_version_id", "platform_id", "version_id", "vul_id" FROM "vulnerabilities_os";
DROP TABLE "vulnerabilities_os";
ALTER TABLE "new_vulnerabilities_os" RENAME TO "vulnerabilities_os";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
