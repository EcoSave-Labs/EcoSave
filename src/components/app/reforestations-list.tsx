import { auth } from "@/lib/auth";
import { ReforestationModel } from "@/types";
import { EmptyReforestationList } from "./empty-reforestation-list";
import { ReforestationCard } from "./reforestation-card";

export async function ReforestationsList() {
  const session = await auth();

  const response = await fetch(
    `http://${
      process.env.NEXT_PUBLIC_LOCAL_API_URL || process.env.VERCEL_URL
    }/api/reforestation-area?user=${session!.user!.email}`
  );
  const reforestations = await response.json();
  const reforestationsList = reforestations.payload.list;

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
