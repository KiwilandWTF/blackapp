-- CreateTable
CREATE TABLE "NFT" (
    "id" SERIAL NOT NULL,
    "onChainMeta" JSONB NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NFT_pkey" PRIMARY KEY ("id")
);
