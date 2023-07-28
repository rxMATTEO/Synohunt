-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "age" TEXT,
    "avatar" TEXT,
    "skills" TEXT,
    "tokenGitLab" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "gitLabId" TEXT,
    "gitLabProjectName" TEXT,
    "aptlyRepo" TEXT
);

-- CreateTable
CREATE TABLE "TestGost" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "preconditions" TEXT,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "TestGost_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Scenario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "description" TEXT,
    "preconditions" TEXT,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Scenario_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Step" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "action" TEXT,
    "expectedResult" TEXT,
    "finalResult" TEXT,
    "testGostId" TEXT,
    "scenarioId" TEXT,
    "testrunId" TEXT,
    CONSTRAINT "Step_testGostId_fkey" FOREIGN KEY ("testGostId") REFERENCES "TestGost" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Step_scenarioId_fkey" FOREIGN KEY ("scenarioId") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Step_testrunId_fkey" FOREIGN KEY ("testrunId") REFERENCES "Testrun" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Testrun" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "testType" TEXT,
    "reportId" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Testrun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Documentation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "docVersion" TEXT NOT NULL,
    "docName" TEXT NOT NULL,
    "docFileId" TEXT NOT NULL,
    "projectVersion" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    CONSTRAINT "Documentation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Issues" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gitlabData" TEXT NOT NULL,
    "testrunId" TEXT NOT NULL,
    CONSTRAINT "Issues_testrunId_fkey" FOREIGN KEY ("testrunId") REFERENCES "Testrun" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilesStep" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileAction" TEXT,
    "fileER" TEXT,
    "stepId" TEXT,
    CONSTRAINT "FilesStep_stepId_fkey" FOREIGN KEY ("stepId") REFERENCES "Step" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "color" TEXT NOT NULL,
    "editable" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,
    "alias" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProfileToProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProfileToProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProfileToProject_B_fkey" FOREIGN KEY ("B") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ScenarioToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ScenarioToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Scenario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ScenarioToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_name_key" ON "User"("email", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "FilesStep_stepId_key" ON "FilesStep"("stepId");

-- CreateIndex
CREATE UNIQUE INDEX "_ProfileToProject_AB_unique" ON "_ProfileToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfileToProject_B_index" ON "_ProfileToProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ScenarioToTag_AB_unique" ON "_ScenarioToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_ScenarioToTag_B_index" ON "_ScenarioToTag"("B");
