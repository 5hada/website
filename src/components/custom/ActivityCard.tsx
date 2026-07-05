import { IconClockHour4 } from "@tabler/icons-react";
import { Card, Tabs, TabsContent, TabsList, TabsTrigger } from "../ui";
import type {
  ActivityCardProps,
  ActivityRowProps,
  ActivityTabProps,
} from "@/data";

export function ActivityRow({ title, count, date }: ActivityRowProps) {
  return (
    <Card className="w-full h-18">
      <div className="w-full flex flex-col items-start px-4 gap-0.5">
        <span className="text-lg">{title}</span>
        <div className="w-full flex flex-row justify-between">
          {count == 0 ? (
            ""
          ) : (
            <div className="flex flex-row items-center gap-2">
              <IconClockHour4 className="mt-0.5" size={16} />
              <span className="text-sm">{count} times</span>
            </div>
          )}
          <span className="text-sm">{date}</span>
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
