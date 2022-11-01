import { player as Player, PrismaClient } from '@prisma/client';

import { serialize } from '../../utils/data.utils';
import PlayersTable from './players-table';

const prisma = new PrismaClient();


const fetchData = async () => {
  const players = await prisma.player.findMany({
    include: { team: true },
    where: { country: 'Canada' },
    orderBy: [
      {
        birthday: 'desc',
      },
    ],
  });

  return serialize<Player[]>(players);
};

const Players = async () => {
  const players = await fetchData();

  return <PlayersTable players={players} />;
};

export default Players;
