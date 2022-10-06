import { useEffect, useState } from 'react';

import TeamsTable from '../components/teams-table/teams-table';
import { API_TEAMS_URL } from '../constants/nba.constants';

import type { NextPage } from 'next';
import { parseApiTeams } from '../utils/api.utils';
import { Team } from '../types/nba.types';

const ClientTeams: NextPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch(API_TEAMS_URL)
      .then((res) => res.json())
      .then(({data}) => {
        setTeams(parseApiTeams(data));
      });
  }, []);

  return <>{!!teams?.length && <TeamsTable teams={teams} />}</>;
};

export default ClientTeams;
