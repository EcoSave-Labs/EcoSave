import { ReforestationTreeModel } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export function TreeCard({ tree }: { tree: ReforestationTreeModel }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    (async () => {
      const image = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=xkskLOsQbGDeNSZ1Q-3qUIehihaQ4L63-_KD9Qhhsw0&query=${tree.name}&per_page=1`
      );
      const imageJson = await image.json();
      setImageUrl(imageJson.results[0].urls.regular);
    })();
  }, []);

  return (
    <div
      style={{
        // @ts-ignore
        "--size": `${tree.grow_space}px`,
      }}
      className="border w-[var(--size)] h-[var(--size)] rounded relative overflow-hidden bg-zinc-800/50 text-zinc-50"
    >
      <h2>{tree.name}</h2>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          className="absolute top-1/2 left-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-full"
          width={tree.grow_space}
          height={tree.grow_space}
        />
      )}
    </div>
  );
}
