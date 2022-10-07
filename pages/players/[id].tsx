import { playerDetail as PlayerDetail, PrismaClient } from '@prisma/client';

import PlayerCard from '../../components/player-card/player-card';
import { PlayerProps } from '../../types/nba.types';
import { serialize } from '../../utils/data.utils';

import type { NextPage } from 'next';

const PlayerPage: NextPage<PlayerProps> = ({ playerDetail }) => {
  return <>{!!playerDetail && <PlayerCard playerDetail={playerDetail} />}</>;
};

export default PlayerPage;

const prisma = new PrismaClient();

export const getStaticPaths = async () => {
  const players = await prisma.player.findMany({
    select: { id: true },
    where: { country: 'Canada' },
  });

  return {
    paths: players.map((player) => ({ params: { id: player.id.toString() } })),
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps = async (context: any) => {
  const playerDetail = await prisma.playerDetail.findFirst({
    include: {
      player: {
        include: {
          team: true,
        },
      },
    },
    where: { playerId: +context.params?.id },
  });

  return {
    props: {
      playerDetail: !!playerDetail ? serialize<PlayerDetail>(playerDetail) : null,
    },
  };
};
