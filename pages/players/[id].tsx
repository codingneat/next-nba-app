import { playerDetail as PlayerDetail, PrismaClient, rosterPlayer as RosterPlayer } from '@prisma/client';

import PlayerCard from '../../components/player-card/player-card';
import { PlayerPageProps } from '../../types/nba.types';
import { serialize } from '../../utils/data.utils';

import type { NextPage } from 'next';
import RosterCard from '../../components/roster-card/roster-card';
import { ROSTER_KEYS } from '../../constants/nba.constants';

const PlayerPage: NextPage<PlayerPageProps> = ({ playerDetail, rosterPlayer }) => {
  return (
    <>
      {!!playerDetail && <PlayerCard playerDetail={playerDetail} />}
      {!!rosterPlayer && <RosterCard rosterPlayer={rosterPlayer} />}
    </>
  );
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
  const [playerDetail, rosterPlayer, boxscorePlayer] = await Promise.all([
    prisma.playerDetail.findFirst({
      include: {
        player: {
          include: {
            team: true,
          },
        },
      },
      where: { playerId: +context.params?.id },
    }),
    prisma.rosterPlayer.findMany({
      include: {
        team: true,
      },
      where: { playerId: +context.params?.id },
    }),
    prisma.boxscorePlayer.findMany({
      include: {
        game: true,
      },
      where: { playerId: +context.params?.id },
    }),
  ]);

  rosterPlayer?.length
    ? rosterPlayer.map(
        (roster) => boxscorePlayer.filter((el) => el.game?.seasonYear === roster.season && el.min !== null).reduce
      )
    : [];

  const rosterPlayerConverted = rosterPlayer.map((roster) => ({
    ...roster,
    ...ROSTER_KEYS.map((key) => ({
      key,
      value:
        boxscorePlayer
          .filter((el) => el.game?.seasonYear === roster.season && el.min !== null)
          .reduce((total, next) => total + (next as any)[key], 0) /
        boxscorePlayer.filter((el) => el.game?.seasonYear === roster.season && el.min !== null)?.length,
    })).reduce((acc, el) => ({ ...acc, [el.key]: el.value }), {}),
  }));

  return {
    props: {
      playerDetail: !!playerDetail ? serialize<PlayerDetail>(playerDetail) : null,
      rosterPlayer: rosterPlayerConverted?.length ? serialize<RosterPlayer[]>(rosterPlayerConverted) : [],
    },
  };
};
