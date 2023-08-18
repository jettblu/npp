import { Contributor, ContributorRole } from "../types";

//TODO: consider automatically pulling doc contributors from Github

// a list of doc contributors
export const contributorList: Contributor[] = [
  {
    id: "jett",
    name: "Jett Hays",
    role: "Troupe Manager 2023",
    avatarPath: "/contributors/jett.png",
  },
];

// for now default contributor is NPP
const defaultContributor: Contributor = {
  id: "npp",
  name: "No parking Players Ghost",
  role: "Troupe Ghost",
  avatarPath: "/favicon.ico",
};

/**
 * Finds contributor by ID. Returns default contributor if no id's match.
 */
export function getContributorById(id: string): Contributor {
  const idToSearch = id.toLowerCase();
  const newContributor: Contributor =
    contributorList.find((c) => c.id.toLowerCase() == idToSearch) ||
    defaultContributor;
  return newContributor;
}
