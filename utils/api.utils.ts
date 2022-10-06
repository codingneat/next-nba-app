import { Team, TeamApi } from '../types/nba.types';

export const parseApiTeams = (teamsApi: TeamApi[]): Team[] => {
  return teamsApi.map((team: TeamApi) => ({
    id: team.id,
    abbreviation: team.abbreviation,
    confName: team.conference,
    divName: team.division,
    fullName: team.full_name,
    city: team.city,
  }));
};
