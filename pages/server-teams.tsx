import type { NextPage } from 'next';

import TeamsTable from '../components/teams-table/teams-table';
import { API_TEAMS_URL } from '../constants/nba.constants';
import { TeamsProps } from '../types/nba.types';
import { parseApiTeams } from '../utils/api.utils';

const ApiTeams: NextPage<TeamsProps> = ({ teams }) => {
  return <TeamsTable teams={teams} />;
};

export default ApiTeams;

export const getServerSideProps = async () => {
  const response = await fetch(API_TEAMS_URL);
  const { data } = await response.json();

  return {
    props: {
      teams: parseApiTeams(data),
    },
  };
};
