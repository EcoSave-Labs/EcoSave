import { z } from "zod";

export const createReforestationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  lat: z.number().min(-90, "Latitude must be at least -90").max(90, "Latitude must be at most 90"),
  lng: z.number().min(-180, "Longitude must be at least -180").max(180, "Longitude must be at most 180"),
  dimension: z.coerce
    .number()
    .min(1000, "Dimension must be at least 1 meter square"),
});

export type CreateReforestationSchema = z.infer<
  typeof createReforestationSchema
>;
