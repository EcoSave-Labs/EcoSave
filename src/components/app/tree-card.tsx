"use client";

import { ReforestationTreeModel } from "@/types";
import { TreePine } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TreeDetailsDialog } from "./tree-details-dialog";

interface TreeCardProps {
  tree: ReforestationTreeModel;
  planted: number;
  reforestation_id: string;
}

export function TreeCard({ tree, planted, reforestation_id }: TreeCardProps) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    (async () => {
      const image = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=xkskLOsQbGDeNSZ1Q-3qUIehihaQ4L63-_KD9Qhhsw0&query=${tree.name}&per_page=1`
      );
      const imageJson = await image.json();
      setImageUrl(imageJson.results[0].urls.regular);
    })();
  }, [tree.name]);

  return (
    <TreeDetailsDialog tree={{ ...tree, image: imageUrl!, planted_quantity: planted, reforestation_id }}>
      <div
        style={{
          // @ts-ignore
          "--space": `${tree.grow_space}%`,
        }}
        className="border w-[var(--space)] h-[var(--space)] rounded relative overflow-hidden bg-gradient-to-b from-zinc-900/0 to-zinc-900 text-zinc-300 p-4 flex flex-col items-start justify-end cursor-pointer"
      >
        <h2 className="text-2xl font-bold text-zinc-50">{tree.name}</h2>
        <p className="text-base">
          <strong>Type:</strong> {tree.type}
        </p>
        <span className="rounded-sm mt-2 text-sm px-2 py-1 bg-zinc-900/50 font-semibold flex gap-1 items-center">
          <TreePine className="w-3 h-3" /> {planted}/{tree.recommended_quantity}
        </span>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt=""
            className="absolute top-1/2 left-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-full object-cover aspect-square"
            width={1000}
            height={1000}
          />
        )}
      </div>
    </TreeDetailsDialog>
  );
}
