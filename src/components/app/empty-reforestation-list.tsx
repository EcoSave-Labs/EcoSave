"use client";

import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { NewReforestationDialog } from ".";
import { Button } from "../ui";

export function EmptyReforestationList() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 mx-auto">
      <Image width={200} height={200} src="/empty-illustration.svg" alt="" />
      <p className="text-muted-foreground">No reforestations found.</p>
      <NewReforestationDialog>
        <Button>
          <PlusCircle className="w-4 h-4 mr-2" /> Create new reforestation area
        </Button>
      </NewReforestationDialog>
    </div>
  );
}
