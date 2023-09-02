export interface IMember {
  name: string;
  description?: string;
  photoPath: string;
  socials: ISocials;
  position?: ClubPosition;
  astrologicalSign?: AstrologicalSign;
  hometown?: string;
  isPg: boolean;
  isBoard: boolean;
}

type AstrologicalSign =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces"
  | "Gasp!";

export interface IAlumni {
  name: string;
  description?: string;
  photoPath: string;
  positions: ClubPosition[];
  wasBoard: boolean;
  wasPg: boolean;
  socials: ISocials;
  gradYear: number;
  hometown?: string;
}

export interface ISocials {
  site?: string;
  twitter?: string;
  github?: string;
  linkedIn?: string;
}

export enum ClubPosition {
  president = 0,
  artisticDirector = 1,
  treasurer = 2,
  general = 3,
  social = 4,
  troupeManager = 5,
  pg = 6,
  detourChair = 7,
}

export function clubPositionToUiString(position?: ClubPosition): string {
  switch (position) {
    case ClubPosition.president: {
      return "President";
    }
    case ClubPosition.artisticDirector: {
      return "AD";
    }
    case ClubPosition.treasurer: {
      return "Finance";
    }
    case ClubPosition.social: {
      return "Social";
    }
    case ClubPosition.troupeManager: {
      return "Manager";
    }
    case ClubPosition.pg: {
      return "Pg";
    }
    case ClubPosition.detourChair: {
      return "Detour";
    }
    default: {
      return "Member";
    }
  }
}
