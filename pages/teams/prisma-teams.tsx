import { PrismaClient } from '@prisma/client';

import TeamDetailsTable from '../../components/team-details-table/team-details-table';

import type { NextPage } from 'next';
import { TeamDetailsProps } from '../../types/nba.types';


const PrismaTeams: NextPage<TeamDetailsProps> = ({ teamDetails }) => {
  return <TeamDetailsTable teamDetails={teamDetails} />;
};

export default PrismaTeams;

const prisma = new PrismaClient();

export const getServerSideProps = async () => {
  const teamDetails = await prisma.teamDetail.findMany({
    include: { team: true },
  });

  return {
    props: {
      teamDetails,
    },
  };
};
