import classNames from 'classnames';
import { FC } from 'react';
import { TeamDetailsProps } from '../../types/nba.types';

const TeamsDetailsTable: FC<TeamDetailsProps> = ({ teamDetails }) => {
  return (
    <div className="overflow-x-auto relative shadow-md bg-white sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-900 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Abbreviation
            </th>
            <th scope="col" className="py-3 px-6">
              City
            </th>
            <th scope="col" className="py-3 px-6">
              Conf / Div
            </th>
            <th scope="col" className="py-3 px-6">
              Year Founded
            </th>
            <th scope="col" className="py-3 px-6">
              Owner
            </th>
            <th scope="col" className="py-3 px-6">
              D League Team
            </th>
          </tr>
        </thead>
        <tbody>
          {teamDetails?.length &&
            teamDetails.map((teamDetail: any, index: number) => (
              <tr key={teamDetail.id} className={classNames('border-b', index % 2 ? 'bg-gray-50' : 'bg-white')}>
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                  {teamDetail.team?.fullName}
                </th>
                <td className="py-4 px-6">{teamDetail.team?.abbreviation}</td>
                <td className="py-4 px-6">{teamDetail.altCityName}</td>
                <td className="py-4 px-6">
                  {teamDetail.team?.confName} / {teamDetail.team?.divName}
                </td>
                <td className="py-4 px-6">{teamDetail.yearFounded}</td>
                <td className="py-4 px-6">{teamDetail.owner}</td>
                <td className="py-4 px-6">{teamDetail.dLeagueAffiliation}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsDetailsTable;
