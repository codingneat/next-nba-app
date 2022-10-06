import classNames from 'classnames';
import { FC } from 'react';

import { TeamsProps } from '../../types/nba.types';

const TeamsTable: FC<TeamsProps> = ({ teams }) => {
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
              Conference
            </th>
            <th scope="col" className="py-3 px-6">
              Division
            </th>
          </tr>
        </thead>
        <tbody>
          {teams?.length &&
            teams.map((team: any, index: number) => (
              <tr key={team.id} className={classNames('border-b', index % 2 ? 'bg-gray-50' : 'bg-white')}>
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                  {team.fullName}
                </th>
                <td className="py-4 px-6">{team.abbreviation}</td>
                <td className="py-4 px-6">{team.city}</td>
                <td className="py-4 px-6">{team.confName}</td>
                <td className="py-4 px-6">{team.divName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamsTable;
