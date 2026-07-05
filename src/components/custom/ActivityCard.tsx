import { Card, Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";

export type ActivityType = "Contributions" | "Artworks";

export type ActivityRowProps = {
  title: string;
  desc: string;
};

export type ActivityTabProps = {
  value: ActivityType;
  icon: string;
  rows?: ActivityRowProps[];
};

export type ActivityCardProps = {
  tabs?: ActivityTabProps[];
};

export function ActivityRow({ title, desc }: ActivityRowProps) {
  return (
    <Card className="w-full h-16">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <span className="text-lg">{title}</span>
          <span>{desc}</span>
        </div>
      </div>
    </Card>
  );
}

function ActivityTab({ value, rows }: Omit<ActivityTabProps, "icon">) {
  return (
    <TabsContent value={value} className="w-full flex flex-col gap-2">
      {rows?.map((row) => (
        <ActivityRow {...row} />
      ))}
    </TabsContent>
  );
}

export function ActivityCard({ tabs }: ActivityCardProps) {
  return (
    <div className="">
      <Tabs className="w-full items-start" defaultValue="Contributions">
        <TabsList className="">
          {tabs?.map((tab) => (
            <TabsTrigger value={tab.value}>{tab.value}</TabsTrigger>
          ))}
        </TabsList>
        {tabs?.map((tab) => (
          <ActivityTab value={tab.value} rows={tab.rows} />
        ))}
      </Tabs>
    </div>
  );
}
