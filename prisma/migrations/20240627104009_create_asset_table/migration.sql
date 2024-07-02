-- CreateTable
CREATE TABLE "Asset" (
    "id" SERIAL NOT NULL,
    "assets" TEXT NOT NULL,
    "lastTrade" TEXT NOT NULL,
    "dayChange" DOUBLE PRECISION NOT NULL,
    "dayChangeAmount" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Asset_pkey" PRIMARY KEY ("id")
);
