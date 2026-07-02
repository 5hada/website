export type PinnedType =
  | "annotation"
  | "website"
  | "github"
  | "artstation"
  | "steam"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "youtube"
  | "twitch"
  | "discord"
  | "reddit"
  | "stackoverflow"
  | "npm"
  | "dockerhub";

export type PinnedData = {
  id: string;
  name: string;
  description: string;
  redirectUrl?: string;
};
