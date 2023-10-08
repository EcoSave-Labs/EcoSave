import { ReforestationCard } from "./reforestation-card";

const reforestations = [
  {
    id: 1,
    name: "Forest 1",
    description: "Description 1",
    locale: "São Paulo",
  },
];

export function ReforestationsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {reforestations.map((reforestation) => (
        <ReforestationCard
          reforestation={reforestation}
          key={reforestation.id}
        />
      ))}
    </div>
  );
}
