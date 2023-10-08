import { MapPin } from "lucide-react";
import Link from "next/link";

import { ReforestationModel } from "@/types";
import Image from "next/image";
import { Card } from "../ui";

export async function ReforestationCard({
  reforestation,
}: {
  reforestation: Omit<ReforestationModel, 'trees'>;
}) {
  const image = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=xkskLOsQbGDeNSZ1Q-3qUIehihaQ4L63-_KD9Qhhsw0&query=${reforestation.locale}&per_page=1`
  );
  const imageJson = await image.json();
  const imageUrl = imageJson.results[0].urls.regular;

  return (
    <Link
      href={`/dashboard/reforestations/${reforestation.id}`}
      className="group text-start rounded-lg ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <Card.Root className="overflow-hidden hover:bg-accent transition-colors">
        <Card.Header className="p-0">
          <Image
            src={imageUrl}
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
        <Card.Footer className="flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" /> {reforestation.locale}
          </p>
        </Card.Footer>
      </Card.Root>
    </Link>
  );
}
