import contributions from "./contributions.json";
import type { ActivityCardProps } from "./types";

export const activityCardData: ActivityCardProps = {
  tabs: [
    {
      value: "Contributions",
      rows: contributions.items.flatMap((contribution) => ({
        title: contribution.repo,
        date: contribution.date,
        count: contribution.commitCount,
      })),
    },
    {
      value: "Artworks",
      rows: [{ title: "Preparing...", count: 0, date: "" }],
    },
  ],
};
