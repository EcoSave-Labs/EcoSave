import { MapPin, Ruler } from "lucide-react";
import Link from "next/link";

import { ReforestationModel } from "@/types";
import Image from "next/image";
import { Card } from "../ui";

export async function ReforestationCard({
  reforestation,
}: {
  reforestation: ReforestationModel;
}) {
  return (
    <Link
      href={`/dashboard/reforestations/${reforestation.id}`}
      className="group text-start rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <Card.Root className="overflow-hidden hover:bg-accent transition-colors">
        <Card.Header className="p-0">
          <Image
            src={reforestation.image_url}
            alt=""
            className="h-40 object-cover"
            width={500}
            height={200}
          />
        </Card.Header>
        <Card.Content className="pt-6">
          <Card.Title className="font-bold">{reforestation.name}</Card.Title>
          <Card.Description className="">
            {reforestation.description}
          </Card.Description>
        </Card.Content>
        <Card.Footer className="flex items-center gap-2 divide-x divide-muted-foreground/30">
          <span className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" /> {reforestation.location}
          </span>
          <span className="flex items-center gap-2 text-sm text-muted-foreground pl-2">
            <Ruler className="w-4 h-4" /> {reforestation.dimension / 1000}m²
          </span>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
}
