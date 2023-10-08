"use client";

import { PlusCircle } from "lucide-react";

import { NewReforestationDialog } from "@/components/app/new-reforestation-dialog";
import { Button } from "@/components/ui/button";
import { useSession } from "@/contexts/session-provider";

export function HomeIntroduction() {
  const { id_hash } = useSession();

  if(!id_hash) return null;

  return (
    <header className="flex items-center justify-between w-full" suppressHydrationWarning>
      <h1 className="font-bold text-3xl">Hello, User#{id_hash}!</h1>
      <NewReforestationDialog>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" /> New reforestation
        </Button>
      </NewReforestationDialog>
    </header>
  );
}
