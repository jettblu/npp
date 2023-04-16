export interface IMember {
  name: string;
  description?: string;
  photoPath: string;
  socials: ISocials;
  position?: ClubPosition;
  hometown?: string;
  isPg: boolean;
  isBoard: boolean;
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
      return "Pg Member";
    }
    default: {
      return "Member";
    }
  }
}
