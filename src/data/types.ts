export type ProjectRowProps = {
  name: string;
  href?: string;
  desc?: string;
};

export type ProjectTabProps = {
  value: string;
  icon: string;
  rows?: ProjectRowProps[];
};

export type ProjectCardProps = {
  tabs?: ProjectTabProps[];
};

export type ActivityType = "Contributions" | "Artworks";

export type ActivityRowProps = {
  title: string;
  date: string;
  count: number;
};

export type ActivityTabProps = {
  value: ActivityType;
  rows?: ActivityRowProps[];
};

export type ActivityCardProps = {
  tabs?: ActivityTabProps[];
};
