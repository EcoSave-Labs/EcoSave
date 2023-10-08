import prisma from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function PUT(request: NextRequest) {
  const bodySchema = z.object({
    planted_amount: z.number(),
    reforestation_id: z.string(),
    tree_name: z.string(),
  });

  const body = await request.json();
  const { planted_amount, reforestation_id, tree_name } =
    bodySchema.parse(body);

  const plantedTree = await prisma.plantedTree
    .findFirst({
      where: {
        reforestationId: reforestation_id,
        name: tree_name,
      },
    })
    .then(
      (plantedTree) => plantedTree,
      () => null
    )
    .catch(() => null);

  console.log({ plantedTree });
  if (plantedTree) {
    await prisma.plantedTree.update({
      where: {
        id: plantedTree.id,
        name: tree_name,
      },
      data: {
        amount: planted_amount,
      },
    });
  } else {
    await prisma.plantedTree.create({
      data: {
        amount: planted_amount,
        reforestationId: reforestation_id,
        name: tree_name,
      },
    });
  }

  return NextResponse.json({
    message: "Planted tree updated successfully",
    payload: {},
    errors: [],
  });
}
