export type RecentDataMap = {
  commits: CommitData;
  artworks: ArtworkData;
};

export type RecentData = {
  [K in keyof RecentDataMap]: {
    id: string;
    type: K;
    data: RecentDataMap[K];
  };
}[keyof RecentDataMap];

export type CommitData = {
  id: string;
  message: string;
};

export type ArtworkData = {
  id: string;
  title: string;
};
