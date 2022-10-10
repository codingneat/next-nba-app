import classNames from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import Modal from '../games-modal/games-modal';

import { PlayersProps } from '../../types/nba.types';

const PlayersTable: FC<PlayersProps> = ({ players }) => {
  return (
    <div className="overflow-x-auto relative shadow-md bg-white sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-900 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Birthday
            </th>
            <th scope="col" className="py-3 px-6">
              School
            </th>
            <th scope="col" className="py-3 px-6">
              Country
            </th>
            <th scope="col" className="py-3 px-6">
              Position
            </th>
            <th scope="col" className="py-3 px-6">
              Team
            </th>
            <th scope="col" className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody>
          {players?.length &&
            players.map((player: any, index: number) => (
              <tr key={player.id} className={classNames('border-b', index % 2 ? 'bg-gray-50' : 'bg-white')}>
                <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap">
                  {player.firstName} {player.lastName}
                </th>
                <td className="py-4 px-6">{!!player.birthday && player.birthday.substring(0, 10)}</td>
                <td className="py-4 px-6">{player.school}</td>
                <td className="py-4 px-6">{player.country}</td>
                <td className="py-4 px-6">{player.position}</td>
                <td className="py-4 px-6">{player.team?.fullName}</td>
                <td className="py-4 px-6">
                  <Link href={`/players/${player.id.toString()}`}>
                    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">View</a>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayersTable;
