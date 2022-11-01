'use client';

import { FC, useEffect, useState } from 'react';

import { Team } from '../../../types/nba.types';
import TeamsTable from '../teams-table';

const ClientTeams: FC = () => {
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
