import { ReforestationTreeModel } from "@/types";
import {
  CalendarClock,
  Fan,
  PersonStanding,
  Ruler,
  Save,
  Sprout,
  Waves,
  Wind,
} from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";
import { Dialog } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TreeDetailsDialogProps {
  tree: ReforestationTreeModel & {
    reforestation_id: string;
    image: string;
    planted_quantity: number;
  };
  children: ReactNode;
}

export function TreeDetailsDialog({ tree, children }: TreeDetailsDialogProps) {
  const [plantedQuantity, setPlantedQuantity] = useState<number>(
    tree.planted_quantity
  );

  const details = [
    {
      icon: Sprout,
      label: "Quantity Planted",
      value: `${plantedQuantity}/${tree.recommended_quantity}`,
    },
    {
      icon: Ruler,
      label: "Grow space",
      value: `${tree.grow_space}%`,
    },
    {
      icon: CalendarClock,
      label: "Germination time",
      value: `${tree.germination_time} days`,
    },
    {
      icon: PersonStanding,
      label: "Adulthood time",
      value: `${tree.time_to_adulthood} days`,
    },
    {
      icon: Wind,
      label: "CH4 reduction",
      value: `${tree.gas_ch4_reduction}%`,
    },
    {
      icon: Fan,
      label: "CO2 reduction",
      value: `${tree.gas_c02_reduction}%`,
    },
    {
      icon: Waves,
      label: "Ideal soil moisture",
      value: `${tree.ideal_soil_moisture}%`,
    },
  ];

  async function updatePlantedQuantity(e: FormEvent) {
    e.preventDefault();

    await fetch(
      `http://${
        process.env.NEXT_PUBLIC_LOCAL_API_URL || process.env.VERCEL_URL
      }/api/reforestation-area/plant-tree`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planted_amount: plantedQuantity,
          reforestation_id: tree.reforestation_id,
          tree_name: tree.name,
        }),
      }
    );
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content className="p-0 overflow-hidden max-w-xl">
        <img src={tree.image} alt="" className="w-full h-48 object-cover" />
        <Dialog.Header className="flex-row items-center justify-between px-6">
          <Dialog.Title>{tree.name}</Dialog.Title>
          <Dialog.Description>{tree.type}</Dialog.Description>
        </Dialog.Header>
        <div className="h-px w-full bg-border" />
        <form
          className="flex flex-col gap-4 px-6 pb-4"
          onSubmit={updatePlantedQuantity}
        >
          <fieldset className="flex items-center gap-2">
            <Input
              name="planted-quantity"
              type="number"
              placeholder="Insert quantity already planted"
              value={plantedQuantity}
              onChange={(e) => setPlantedQuantity(Number(e.target.value))}
              min={0}
              max={tree.recommended_quantity}
            />
            <Button size="icon">
              <Save className="h-4 w-4" />
            </Button>
          </fieldset>
          <main className="grid grid-cols-2 gap-2">
            {details.map(({ icon: Icon, label, value }) => (
              <div
                className="flex items-center gap-4 bg-card text-card-foreground border rounded px-4 py-2"
                key={label}
              >
                <Icon className="w-6 h-6 text-primary" />
                <div className="flex flex-col">
                  <strong>{label}</strong>
                  <span className="opacity-90">{value}</span>
                </div>
              </div>
            ))}
          </main>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
