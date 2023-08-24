-- CreateTable
CREATE TABLE "Credentials" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "publicKey" TEXT NOT NULL,
    "privateKey" TEXT NOT NULL
);
