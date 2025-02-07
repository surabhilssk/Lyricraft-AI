-- DropForeignKey
ALTER TABLE "PoemHistory" DROP CONSTRAINT "PoemHistory_userId_fkey";

-- AlterTable
ALTER TABLE "PoemHistory" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PoemHistory" ADD CONSTRAINT "PoemHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
