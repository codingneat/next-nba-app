import { teamDetail as TeamDetail, player as Player, playerDetail as PlayerDetail } from '@prisma/client';

export interface Team {
  id: string;
  fullName: string;
  city: string;
  divName: string;
  confName: string;
  abbreviation: string;
}

export interface TeamApi {
  id: string;
  full_name: string;
  city: string;
  division: string;
  conference: string;
  abbreviation: string;
}

export interface TeamsProps {
  teams: Team[];
}

export interface TeamDetailsProps {
  teamDetails: TeamDetail[];
}

export interface PlayersProps {
  players: Player[];
}

export interface PlayerProps {
  playerDetail: PlayerDetail | null;
}
