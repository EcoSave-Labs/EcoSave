import { NotificationsList, ReforestationsList } from "@/components/app";
import { Input } from "@/components/ui";
import { HomeIntroduction } from "./reforestations/components/home-introduction";

export default function Home() {
  return (
    <div className="container my-8 flex flex-col gap-6">
      <HomeIntroduction />

      <NotificationsList />

      <section className="flex flex-col gap-2">
        <header className="flex justify-between gap-4 flex-col md:flex-row">
          <h2 className="text-2xl font-bold text-start">Reforestation areas</h2>
          <Input
            className="flex-1 md:max-w-xl"
            placeholder="Search reforestation areas"
          />
        </header>
        <ReforestationsList />
      </section>
    </div>
  );
}
