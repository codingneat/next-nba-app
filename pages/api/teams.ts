// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API_TEAMS_URL } from '../../constants/nba.constants';
import { Team } from '../../types/nba.types';
import { parseApiTeams } from '../../utils/api.utils';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Team[]>) {
  const response = await fetch(API_TEAMS_URL);
  const { data } = await response.json();

  res.status(200).json(parseApiTeams(data));
}
