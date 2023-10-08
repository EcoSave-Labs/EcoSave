"use client";

import {
  CreateReforestationSchema,
  createReforestationSchema,
} from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";

// @ts-ignore
const LocationMap = dynamic(() => import("./location-map"), {
  ssr: false,
});

import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface NewReforestationDialogProps {
  children: ReactNode;
}

export function NewReforestationDialog({
  children,
}: NewReforestationDialogProps) {
  const { data: session } = useSession();
  const { refresh } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<CreateReforestationSchema>({
    resolver: zodResolver(createReforestationSchema),
  });

  async function handleCreateReforestation(data: CreateReforestationSchema) {
    await fetch(
      `http://${
        process.env.NEXT_PUBLIC_LOCAL_API_URL || process.env.VERCEL_URL
      }/api/reforestation-area?user=${session!.user!.email}`,
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    refresh();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content>
        <form
          onSubmit={handleSubmit(handleCreateReforestation)}
          className="flex flex-col gap-[inherit]"
        >
          <Dialog.Header>
            <Dialog.Title>Create new reforestation area</Dialog.Title>
            <Dialog.Description>
              Fill the form below to create a new reforestation area.
            </Dialog.Description>
          </Dialog.Header>
          <div className="grid gap-4">
            <fieldset className="grid gap-2 flex-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Insert area name"
              />
              <span className="text-xs text-red-500 min-h-[1rem]">
                {errors.name?.message || ""}
              </span>
            </fieldset>
            <fieldset className="grid gap-2 flex-1">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                {...register("description")}
                placeholder="Insert area name"
              />
              <span className="text-xs text-red-500 min-h-[1rem]">
                {errors.description?.message || ""}
              </span>
            </fieldset>
            <fieldset className="grid gap-2 flex-1">
              <Label htmlFor="dimension">Area Dimension</Label>
              <Input
                id="dimension"
                {...register("dimension")}
                type="number"
                placeholder="Insert area dimension in cm²"
              />
              <span className="text-xs text-red-500 min-h-[1rem]">
                {errors.dimension?.message || ""}
              </span>
            </fieldset>
            <fieldset className="grid gap-2 flex-1">
              <Label htmlFor="location">Location</Label>
              {LocationMap && (
                <LocationMap
                  onSetLocation={(location) => {
                    setValue("lat", location.lat);
                    setValue("lng", location.lng);
                  }}
                />
              )}
              <span className="text-xs text-red-500 min-h-[1rem]">
                {errors.lat?.message || errors.lng?.message || ""}
              </span>
            </fieldset>
          </div>
          <Dialog.Footer>
            <Dialog.Close>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Button disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create area"}
            </Button>
          </Dialog.Footer>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
