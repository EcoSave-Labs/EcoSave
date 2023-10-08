"use client";

import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { TreeCard } from "@/components/app/tree-card";
import { Select } from "@/components/ui/select";

import { getRecommendationTree } from "@/sdk";
import { ReforestationModel, ReforestationTreeModel } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ReforestationPageProps {
  params: {
    id: string;
  };
}

const soilMoistureOptions = [60, 65, 70, 75];

export default function ReforestationPage({ params }: ReforestationPageProps) {
  const [reforestationDetails, setReforestationDetails] =
    useState<ReforestationModel | null>(null);
  const [soilMoisture, setSoilMoisture] = useState<string | undefined>();
  const [recommendedTrees, setRecommendedTrees] = useState<
    ReforestationTreeModel[]
  >([]);

  useEffect(() => {
    (async () => {
      const reforestationResponse = await fetch(
        `${
          process.env.NEXT_PUBLIC_LOCAL_API_URL || process.env.VERCEL_URL
        }/api/reforestation-area/${params.id}`
      );
      const reforestationDetails = await reforestationResponse.json();

      setReforestationDetails(reforestationDetails.payload);
    })();
  }, []);

  useEffect(() => {
    if (!soilMoisture || !reforestationDetails) return;

    (async () => {
      const treesList = await getRecommendationTree({
        regionSize: reforestationDetails!.dimension!,
        regionSoilMoisture: Number(soilMoisture),
      });

      setRecommendedTrees(treesList || []);
    })();
  }, [reforestationDetails, soilMoisture]);

  return (
    <div
      className="container my-8 flex flex-col gap-6"
      // @ts-ignore
      style={{ "--size": `${reforestationDetails?.dimension}px` }}
    >
      {reforestationDetails?.image_url ? (
        <Image
          src={reforestationDetails?.image_url}
          alt=""
          height={192}
          width={1920}
          className="w-full h-24 rounded object-cover"
        />
      ) : (
        <div className="w-full h-24 bg-zinc-800 rounded" />
      )}
      <header className="flex items-center justify-between ">
        <h1 className="font-bold text-3xl">
          {reforestationDetails?.name || "Loading..."}
        </h1>
        <Select.Root onValueChange={setSoilMoisture} value={soilMoisture}>
          <Select.Trigger className="w-fit min-w-[190px]">
            <Select.Value placeholder="Select a soil moisture" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Soil moisture</Select.Label>
              {soilMoistureOptions.map((soilMoistureOption) => (
                <Select.Item
                  value={String(soilMoistureOption)}
                  key={soilMoistureOption}
                >
                  {soilMoistureOption}%
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </header>
      {soilMoisture ? (
        <ScrollContainer>
          <div className="flex h-[var(--size)] w-[var(--size)] flex-wrap gap-2 p-2 border rounded-md">
            {recommendedTrees.length > 0 ? recommendedTrees.map((tree) => (
              <TreeCard
                tree={tree}
                key={tree.id}
                reforestation_id={params.id}
                planted={
                  reforestationDetails?.planted_trees?.find(
                    (planted) => planted.name === tree.name
                  )?.amount || 0
                }
              />
            )) : (
              <h3 className="text-xl text-center w-full">Loading...</h3>
            )}
          </div>
        </ScrollContainer>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 mx-auto">
          <Image
            width={200}
            height={200}
            src="/empty-illustration.svg"
            alt=""
          />
          <p className="text-muted-foreground">
            Select a soil moisture to see the recommended trees
          </p>
        </div>
      )}
    </div>
  );
}
