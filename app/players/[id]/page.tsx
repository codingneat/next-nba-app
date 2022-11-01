import { playerDetail as PlayerDetail, PrismaClient, rosterPlayer as RosterPlayer } from '@prisma/client';

import { ROSTER_KEYS } from '../../../constants/nba.constants';
import { serialize } from '../../../utils/data.utils';
import PlayerCard from '../player-card';
import RosterCard from '../roster-card';

const prisma = new PrismaClient();

export const generateStaticParams = async () => {
  const players = await prisma.player.findMany({
    select: { id: true },
    where: { country: 'Canada' },
  });

  return players.map((player) => ({ id: player.id.toString() }));
};

const fetchData = async (params: any) => {
  const [playerDetail, rosterPlayer, boxscorePlayer] = await Promise.all([
    prisma.playerDetail.findFirst({
      include: {
        player: {
          include: {
            team: true,
          },
        },
      },
      where: { playerId: +params?.id },
    }),
    prisma.rosterPlayer.findMany({
      include: {
        team: true,
      },
      where: { playerId: +params?.id },
    }),
    prisma.boxscorePlayer.findMany({
      include: {
        game: true,
      },
      where: { playerId: +params?.id },
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
    playerDetail: !!playerDetail ? serialize<PlayerDetail>(playerDetail) : null,
    rosterPlayer: rosterPlayerConverted?.length ? serialize<RosterPlayer[]>(rosterPlayerConverted) : [],
  };
};

const PlayerPage = async ({ params, children }: any) => {
  const { playerDetail, rosterPlayer } = await fetchData(params);

  return (
    <>
      {!!playerDetail && <PlayerCard playerDetail={playerDetail} />}
      {!!rosterPlayer && <RosterCard rosterPlayer={rosterPlayer} />}
    </>
  );
};

export default PlayerPage;
