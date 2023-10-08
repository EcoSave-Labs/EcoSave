import prisma from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

async function fetchLocationName(lat: number, lng: number) {
  const locationResponse = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=AIzaSyCZYJtCiT9NaSN8ES-F8b7pQT9OW8Yiccw`
  );
  const locationJson = await locationResponse.json();
  const [city, state] = locationJson.results[0].address_components.filter(
    (item: any) => {
      return (
        item.types.includes("administrative_area_level_2") ||
        item.types.includes("administrative_area_level_1")
      );
    }
  );
  return `${city.long_name}, ${state.long_name}`;
}

async function fetchLocationImage(location: string) {
  const imageResponse = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=xkskLOsQbGDeNSZ1Q-3qUIehihaQ4L63-_KD9Qhhsw0&query=${
      location.split(",")[1]
    }&per_page=1`
  );
  const imageJson = await imageResponse.json();
  return imageJson.results[0].urls.regular;
}

export async function POST(request: NextRequest) {
  try {
    const queryParams = request.nextUrl.searchParams;
    const paramUser = queryParams.get("user");

    const bodySchema = z.object({
      name: z.string(),
      description: z.string(),
      dimension: z.coerce.number(),
      lat: z.number(),
      lng: z.number(),
      user: z.string(),
    });

    const body = await request.json();
    const { description, name, dimension, lat, lng, user } = bodySchema.parse({
      ...body,
      user: paramUser,
    });

    const location = await fetchLocationName(lat, lng);
    const image_url = await fetchLocationImage(location);

    const createdReforestationArea = await prisma.reforestation.create({
      data: {
        description,
        dimension,
        image_url,
        name,
        user,
        lat,
        lng,
        location,
      },
    });

    console.log({ createdReforestationArea });

    return NextResponse.json({
      message: "Reforestation area created successfully",
      payload: createdReforestationArea,
      errors: [],
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Error creating reforestation area",
          payload: {},
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Error creating reforestation area",
        payload: {},
        errors: [error],
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const queryParams = request.nextUrl.searchParams;
    const paramUser = queryParams.get("user");

    const bodySchema = z.object({
      user: z.string(),
    });

    const { user } = bodySchema.parse({
      user: paramUser,
    });

    const reforestationAreas = await prisma.reforestation.findMany({
      where: {
        user,
      },
    });

    return NextResponse.json({
      message: "Reforestation areas fetched successfully",
      payload: {
        list: reforestationAreas,
      },
      errors: [],
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          message: "Error fetching reforestation areas",
          payload: {
            list: [],
          },
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "Error fetching reforestation areas",
        payload: {
          list: [],
        },
        errors: [error],
      },
      { status: 500 }
    );
  }
}
