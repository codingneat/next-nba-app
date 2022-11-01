import { PrismaClient } from '@prisma/client';

import TeamDetailsTable from '../team-details-table';

const prisma = new PrismaClient();

const fetchData = async () => {
  const teamDetails = await prisma.teamDetail.findMany({
    include: { team: true },
  });

  return teamDetails;
};


const PrismaTeams = async () => {
  const teamDetails = await fetchData();
  return <TeamDetailsTable teamDetails={teamDetails} />;
};

export default PrismaTeams;

