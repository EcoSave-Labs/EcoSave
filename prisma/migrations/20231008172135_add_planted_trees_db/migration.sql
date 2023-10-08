-- CreateTable
CREATE TABLE "PlantedTree" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "reforestationId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlantedTree_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlantedTree" ADD CONSTRAINT "PlantedTree_reforestationId_fkey" FOREIGN KEY ("reforestationId") REFERENCES "Reforestation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
