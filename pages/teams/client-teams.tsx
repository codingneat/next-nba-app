import { useEffect, useState } from 'react';

import TeamsTable from '../../components/teams-table/teams-table';

import type { NextPage } from 'next';
import { Team } from '../../types/nba.types';

const ClientTeams: NextPage = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch('/api/teams')
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      });
  }, []);

  return <>{!!teams?.length && <TeamsTable teams={teams} />}</>;
};

export default ClientTeams;
