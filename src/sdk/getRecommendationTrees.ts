import { ReforestationTreeModel } from "@/types";
import { requester } from "./requester";
import { ENDPOINT } from "./endpoints";

interface IGetRecommendationTreeParams {
  regionSize: number;
  regionSoilMoisture: number;
}

export const getRecommendationTree = async ({
  regionSize,
  regionSoilMoisture,
}: IGetRecommendationTreeParams): Promise<ReforestationTreeModel[]> => {
  const { data } = await requester({}).post<ReforestationTreeModel[]>(
    `${ENDPOINT.getRecommendationTrees}`,
    {
      region_size: regionSize,
      region_soil_moisture: regionSoilMoisture,
    }
  );

  return data;
};

