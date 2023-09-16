/*
  Warnings:

  - Added the required column `published` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'AUTHER';

-- AlterTable
ALTER TABLE "PeopleMessages" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "authorId" INTEGER,
ADD COLUMN     "published" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeopleMessages" ADD CONSTRAINT "PeopleMessages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
