-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" TEXT NOT NULL,
    "topic" TEXT NOT NULL DEFAULT '',
    "value" TEXT NOT NULL,
    "imgPath" TEXT NOT NULL DEFAULT '/img/biglogo.png',
    "statusId" INTEGER NOT NULL,
    CONSTRAINT "Message_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "MessageStatus" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("id", "statusId", "topic", "userId", "value") SELECT "id", "statusId", "topic", "userId", "value" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
