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
  {
    name: "Patrick Fisher",
    photoPath: "/pg/fall23/patrick.jpg",
    positions: [ClubPosition.president],
    hometown: "San Francisco, California",
    socials: {},
    wasPg: true,
    wasBoard: false,
    gradYear: 2024,
  },
  {
    name: "Jett Hays",
    photoPath: "/pg/fall23/jett.webp",
    positions: [ClubPosition.troupeManager],
    socials: {},
    wasPg: true,
    wasBoard: true,
    hometown: "Torrance, California",
    gradYear: 2024,
  },
  {
    name: "Stephen Tao",
    photoPath: "/pg/fall23/stephen.jpg",
    positions: [ClubPosition.detourChair],
    socials: {},
    wasPg: true,
    wasBoard: true,
    hometown: "San Jose, California",
    gradYear: 2024,
    description:
      "It was a silly goofy thing I did in high school that I wanted to do at CMU !!!",
  },
];
