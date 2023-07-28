/*
  Warnings:

  - A unique constraint covering the columns `[repo]` on the table `Package` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Package_repo_key" ON "Package"("repo");
