import { NotificationsList } from "@/components/app/notifications-list";
import { ReforestationsList } from "@/components/app/reforestations-list"
import { HomeIntroduction } from "./reforestations/components/home-introduction";

export default function Dashboard() {
  return (
    <div className="container my-8 flex flex-col gap-6">
      <HomeIntroduction />

      <NotificationsList />

      <section className="flex flex-col gap-2">
        <header className="flex justify-between gap-4 flex-col md:flex-row h-10 items-center">
          <h2 className="text-2xl font-bold text-start">Reforestation areas</h2>
        </header>
        <ReforestationsList />
      </section>
    </div>
  );
}
