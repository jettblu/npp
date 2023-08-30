import { ClubPosition, IAlumni, IMember } from "@/members/models";

export const pgAlumni: IAlumni[] = [
  {
    name: "Julia Loghinov",
    photoPath: "/pg/spring23/julia.webp",
    positions: [ClubPosition.president],
    // TODO: julia's hometown
    socials: {},
    wasPg: true,
    wasBoard: true,
    gradYear: 2023,
  },
  {
    name: "Gavin Grnja",
    photoPath: "/pg/spring23/gavin.webp",
    positions: [ClubPosition.social, ClubPosition.detourChair],
    hometown: "Florida",
    socials: {},
    wasPg: true,
    wasBoard: true,
    gradYear: 2023,
  },
];
