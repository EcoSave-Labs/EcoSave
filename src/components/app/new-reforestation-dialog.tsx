import { ReactNode } from "react";
import { Button, Dialog, Input, Label } from "../ui";

interface NewReforestationDialogProps {
  children: ReactNode;
}

export function NewReforestationDialog({
  children,
}: NewReforestationDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Create new reforestation area</Dialog.Title>
          <Dialog.Description>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Dialog.Description>
        </Dialog.Header>
        <div className="grid gap-4">
          <fieldset className="grid gap-2 flex-1">
            <Label htmlFor="name">Area Width</Label>
            <Input id="width" placeholder="Insert area width" />
          </fieldset>
          <fieldset className="grid gap-2 flex-1">
            <Label htmlFor="name">Location</Label>
            <Input id="width" placeholder="Insert area location" />
          </fieldset>
          <div className="flex gap-[inherit]">
            <fieldset className="grid gap-2 flex-1">
              <Label htmlFor="name">Area Width</Label>
              <Input id="width" placeholder="Insert area width in cm" />
            </fieldset>
            <fieldset className="grid gap-2 flex-1">
              <Label htmlFor="name">Area Height</Label>
              <Input id="height" placeholder="Insert area width in cm" />
            </fieldset>
          </div>
        </div>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Create area</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
