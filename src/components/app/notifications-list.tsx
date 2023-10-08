import { Palmtree, TentTree, TreeDeciduous, TreePine } from "lucide-react";
import { Card } from "../ui";

const notifications = [
  {
    title: "Low Soil Moisture",
    value: "Low Moisture Alert",
    description: "Latitude: -23.456, Longitude: -45.789",
    icon: TreeDeciduous,
  },
  {
    title: "High Temperature",
    value: "High Temperature Alert",
    description: "Latitude: -22.123, Longitude: -46.456",
    icon: TreePine,
  },
  {
    title: "Low Temperature",
    value: "Low Temperature Alert",
    description: "Latitude: -24.789, Longitude: -47.012",
    icon: Palmtree,
  },
  {
    title: "High Humidity",
    value: "High Humidity Alert",
    description: "Latitude: -23.001, Longitude: -46.222",
    icon: TentTree,
  },
];

export function NotificationsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {notifications.map((notification, index) => (
        <Card.Root key={notification.title} className="flex flex-col justify-between">
          <Card.Header className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title className="text-sm font-medium">
              {notification.title}
            </Card.Title>
            <notification.icon className="w-4 h-4 text-muted-foreground" />
          </Card.Header>
          <Card.Content className="h-full flex flex-col justify-between">
            <div className="text-2xl font-bold">{notification.value}</div>
            <p className="text-xs text-muted-foreground">
              {notification.description}
            </p>
          </Card.Content>
        </Card.Root>
      ))}
    </div>
  );
}
