import { player as Player, PrismaClient } from '@prisma/client';

import PlayersTable from '../../components/players-table/players-table';
import { PlayersProps } from '../../types/nba.types';

import type { NextPage } from 'next';
import { serialize } from '../../utils/data.utils';

const Players: NextPage<PlayersProps> = ({ players }) => {
  return <PlayersTable players={players} />;
};

export default Players;

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const players = await prisma.player.findMany({
    include: { team: true },
    where: { country: 'Canada' },
    orderBy: [
      {
        birthday: 'desc',
      },
    ],
  });

  return {
    props: {
      players: serialize<Player[]>(players),
    },
  };
};
