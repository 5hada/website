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
      <CardContent className="flex flex-row h-fit w-fit px-3 py-1">
        <span>{name}</span>
        <span>{desc ? desc : ""}</span>
        <IconLink href={href}></IconLink>
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
      <Tabs orientation="vertical">
        <TabsList>
          {tabs?.map((tab) => (
            <TabsTrigger value={tab.value} className="w-8 h-8 rounded-4xl">
              {tab.icon}
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
