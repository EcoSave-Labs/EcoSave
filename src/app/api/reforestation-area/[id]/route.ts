import prisma from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

interface ReforestationAreaContext {
  params: {
    id: string;
  };
}

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
