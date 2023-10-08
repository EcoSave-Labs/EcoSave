"use client";

import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { TreeCard } from "@/components/app/tree-card";

const reforestation = {
  id: 1,
  name: "Forest 1",
  description: "Description 1",
  image: "https://cdn.pixabay.com/photo/2012/09/15/02/22/forest-56930_1280.jpg",
  locale: "São Paulo",
  trees: [
    {
      id: 13,
      name: "Pine",
      type: "Tree",
      grow_space: 300,
      germination_time: 1,
      time_to_adulthood: 1,
      gas_ch4_reduction: 1,
      ideal_soil_moisture: 1,
      gas_c02_reduction: 1,
      recommended_quantity: 1,
      cluster: 1,
    },
    {
      id: 13,
      name: "Eucalyptus",
      type: "Tree",
      grow_space: 200,
      germination_time: 1,
      time_to_adulthood: 1,
      gas_ch4_reduction: 1,
      ideal_soil_moisture: 1,
      gas_c02_reduction: 1,
      recommended_quantity: 1,
      cluster: 1,
    },
  ],
};

export default function ReforestationPage() {
  const [width, height] = [500, 2000];

  return (
    <div
      className="container my-8 flex flex-col gap-6"
      // @ts-ignore
      style={{ "--rows": `${height}px`, "--cols": `${width}px` }}
    >
      <h1 className="font-bold text-3xl">{reforestation.name}</h1>
      <ScrollContainer>
        <div className="flex h-[var(--cols)] w-[var(--rows)] flex-wrap gap-2 p-2 border rounded-md">
          {reforestation.trees.map((tree) => (
            <TreeCard tree={tree} key={tree.id} />
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
}
