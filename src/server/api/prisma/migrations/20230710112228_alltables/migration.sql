-- CreateTable
CREATE TABLE "cwe" (
    "cwe_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "indentifier" TEXT NOT NULL,
    "vul_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "exploit_statuses" (
    "exploit_status_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "exploit_status_value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "fix_statuses" (
    "fix_status_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fix_status_value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "soft_types" (
    "soft_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "solutions" (
    "solution_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "solution_value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "vendors" (
    "vendor_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "versions" (
    "version_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "versions3" (
    "version_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "min" TEXT,
    "max" TEXT,
    "unparsed" TEXT
);

-- CreateTable
CREATE TABLE "vul_statuses" (
    "vul_status_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vul_status_value" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "vulnerabilities" (
    "vul_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "identifier" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "identify_date" DATETIME NOT NULL,
    "cvss_id" INTEGER NOT NULL,
    "severity_id" INTEGER NOT NULL,
    "solution_id" INTEGER NOT NULL,
    "vul_status_id" INTEGER NOT NULL,
    "exploit_status_id" INTEGER NOT NULL,
    "fix_status_id" INTEGER NOT NULL,
    "sources" TEXT,
    "other" TEXT,
    CONSTRAINT "vulnerabilities_cvss_id_fkey" FOREIGN KEY ("cvss_id") REFERENCES "cvss" ("cvss_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "vulnerabilities_os" (
    "os_version_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "version_id" INTEGER NOT NULL,
    "os_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL,
    "vul_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "vulnerabilities_soft" (
    "vul_soft_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vul_id" INTEGER NOT NULL,
    "soft_id" INTEGER NOT NULL,
    "version_id" INTEGER NOT NULL
);
