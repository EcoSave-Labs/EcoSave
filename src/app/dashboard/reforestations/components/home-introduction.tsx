"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { PlusCircle } from "lucide-react";

import { NewReforestationDialog } from "@/components/app/new-reforestation-dialog";
import { Button } from "@/components/ui/button";

export function HomeIntroduction() {
  const { data: session, status } = useSession();

  if (status === "loading" || typeof window === "undefined") return null;

  if (status === "unauthenticated") return redirect("/");

  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="font-bold text-3xl">Hello, {session?.user?.name}!</h1>
      <NewReforestationDialog>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" /> New reforestation
        </Button>
      </NewReforestationDialog>
    </header>
  );
}
