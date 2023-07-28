-- RedefineTables
PRAGMA foreign_keys=OFF;
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
