import fs from "node:fs/promises";
import type { Contributions, GraphQLResponse } from "./types";

const token = process.env.GITHUB_TOKEN;

if (!token) {
  throw new Error("GITHUB_TOKEN is not set.");
}

const CONTRIBUTIONS = `
contributionsCollection {
  commitContributionsByRepository(maxRepositories: 5) {
    repository {
      name
    }
    contributions(first: 1) {
      nodes {
        commitCount
        occurredAt
      }
    }
  }
}
`;

const query = `
query {
  viewer {
    ${CONTRIBUTIONS}
  }
}
`;

const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
});

const data: GraphQLResponse = await response.json();

if (!response.ok || data.errors) {
  console.error("status:", response.status);
  console.error("response:", JSON.stringify(data, null, 2));
  throw new Error("GitHub GraphQL request failed");
}

const contributions: Contributions = {
  items: data.data
    ? data.data.viewer.contributionsCollection.commitContributionsByRepository.flatMap(
        (repo) =>
          repo.contributions.nodes.map((node) => ({
            repo: repo.repository.name,
            commitCount: node.commitCount,
            date: node.occurredAt,
          })),
      )
    : [{ repo: "null", commitCount: 0, date: "" }],
};

// await fs.writeFile("debug/reponse.json", JSON.stringify(response, null, 2));

await fs.writeFile(
  "src/data/contributions.json",
  JSON.stringify(contributions, null, 2),
);
