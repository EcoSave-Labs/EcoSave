import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface ReforestationAreaContext {
  params: {
    id: string;
  };
}

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  context: ReforestationAreaContext
) {
  const { id } = context.params;

  const reforestationArea = await prisma.reforestation.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      planted_trees: true,
    },
  });

  return NextResponse.json({
    message: "Reforestation area fetched successfully",
    payload: reforestationArea,
    errors: [],
  });
}
