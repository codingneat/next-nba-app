import TeamsTable from './teams-table';
import { API_TEAMS_URL } from '../../constants/nba.constants';
import { parseApiTeams } from '../../utils/api.utils';

const fetchData = async () => {
  const response = await fetch(API_TEAMS_URL);
  const { data } = await response.json();

  return parseApiTeams(data);
};

const ApiTeams = async () => {
  const teams = await fetchData();

  return <TeamsTable teams={teams} />;
};

export default ApiTeams;
