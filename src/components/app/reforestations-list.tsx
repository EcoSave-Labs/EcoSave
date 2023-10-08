"use client";

import { ReforestationModel } from "@/types";

import { EmptyReforestationList } from "./empty-reforestation-list";
import { ReforestationCard } from "./reforestation-card";
import { useSession } from "@/contexts/session-provider";
import { useEffect, useState } from "react";

export function ReforestationsList() {
  const { id_hash } = useSession();
  const [reforestationsList, setReforestationsList] = useState([]);

  useEffect(() => {
    if(!id_hash) return;

    (async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_LOCAL_API_URL || process.env.VERCEL_URL
        }/api/reforestation-area?user=${id_hash}`
      );
      const reforestations = await response.json();
      setReforestationsList(reforestations.payload.list);
    })()
  }, [id_hash])

  return reforestationsList.length > 0 ? (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {reforestationsList.map((reforestation: ReforestationModel) => (
        <ReforestationCard
          reforestation={reforestation}
          key={reforestation.id}
        />
      ))}
    </div>
  ) : (
    <EmptyReforestationList />
  );
}
