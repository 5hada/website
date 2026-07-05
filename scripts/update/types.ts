export type GraphQLResponse = {
  data?: {
    viewer: {
      contributionsCollection: {
        commitContributionsByRepository: {
          repository: {
            name: string;
          };
          contributions: {
            nodes: {
              commitCount: number;
              occurredAt: string;
            }[];
          };
        }[];
      };
    };
  };
  errors?: [];
};

type Contribution = {
  repo: string;
  commitCount: number;
  date: string;
};

export type Contributions = {
  // total: number;
  items: Contribution[];
};

type Repository = {
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  isFork: boolean;
  isArchived: boolean;
  stargazerCount: number;
  forkCount: number;
  language: string | null;
  updatedAt: string;
};

type Commit = {
  message: string;
  committedDate: string;
  url: string;
  repository: {
    name: string;
  };
};

// type Profile = {
//   login: string;
//   name: string | null;
//   avatarUrl: string;
//   bio: string | null;
// };

// type Stats = {
//   followers: number;
//   following: number;
//   publicRepos: number;
//   totalStars: number;
// };

export type GithubData = {
  // profile: Profile;
  // stats: Stats;

  repositories: Repository[];
  contributions: Contributions;
  recentCommits: Commit[];
};
