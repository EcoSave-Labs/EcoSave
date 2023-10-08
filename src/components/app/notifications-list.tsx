import { Palmtree, TentTree, TreeDeciduous, TreePine } from "lucide-react";
import { Card } from "../ui";

const notifications = [
  {
    title: "Notification 1",
    value: "Value 1",
    description: "Description 1",
    icon: TreeDeciduous,
  },
  {
    title: "Notification 2",
    value: "Value 2",
    description: "Description 2",
    icon: TreePine,
  },
  {
    title: "Notification 3",
    value: "Value 3",
    description: "Description 3",
    icon: Palmtree,
  },
  {
    title: "Notification 4",
    value: "Value 4",
    description: "Description 4",
    icon: TentTree,
  },
];

export function NotificationsList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {notifications.map((notification, index) => (
        <Card.Root key={index}>
          <Card.Header className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title className="text-sm font-medium">
              {notification.title}
            </Card.Title>
            <notification.icon className="w-4 h-4 text-muted-foreground" />
          </Card.Header>
          <Card.Content>
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
