import {
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
  IconLink,
} from "../ui";

export type ProjectRowProps = {
  name: string;
  href?: string;
  desc?: string;
};

export type ProjectTabProps = {
  icon: string;
  value: string;
  rows?: ProjectRowProps[];
};

export type ProjectCardProps = {
  tabs?: ProjectTabProps[];
};

function ProjectRow({ name, href, desc }: ProjectRowProps) {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-row h-fit w-full px-3 py-1">
        <span>{name}</span>
        <span>{desc ? desc : ""}</span>
        <div className="flex-1 flex flex-row justify-end">
          <IconLink href={href}></IconLink>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectContent({ value, rows }: Omit<ProjectTabProps, "icon">) {
  return (
    <TabsContent value={value} className="space-y-2">
      {rows?.map((row) => (
        <ProjectRow {...row} />
      ))}
    </TabsContent>
  );
}

export function ProjectCard({ tabs }: ProjectCardProps) {
  return (
    <Card className="size-full items-start">
      <Tabs
        orientation="vertical"
        defaultValue="pastel"
        className="size-full flex flex-row"
      >
        <TabsList className="w-12">
          {tabs?.map((tab) => (
            <TabsTrigger
              value={tab.value}
              className="w-full aspect-square rounded-2xl flex flex-col justify-center pt-2"
            >
              <div>{tab.icon}</div>
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs?.map((tab) => (
          <ProjectContent value={tab.value} rows={tab.rows} />
        ))}
      </Tabs>
    </Card>
  );
}
