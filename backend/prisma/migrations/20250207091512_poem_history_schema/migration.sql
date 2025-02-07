-- CreateTable
CREATE TABLE "PoemHistory" (
    "id" TEXT NOT NULL,
    "poemTitle" TEXT NOT NULL,
    "poemContent" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "PoemHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PoemHistory" ADD CONSTRAINT "PoemHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
