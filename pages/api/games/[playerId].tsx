import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { playerId, season = '2021' } = req.query;


  if (typeof playerId !== 'string' || (season && typeof season !== 'string')) {
    return res.status(400).json({ error: true });
  }


  const games = await prisma.boxscorePlayer.findMany({
    include: {
      game: true,
    },
    where: { playerId: +playerId, game: season ? { seasonYear: +season } : {} },
  });

  res.status(200).json(games.filter(game => game.min !== null));
}
