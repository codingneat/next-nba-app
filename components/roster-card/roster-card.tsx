import { boxscorePlayer as BoxscorePlayer } from '@prisma/client';
import classNames from 'classnames';
import { FC, useState } from 'react';

import { ROSTER_KEYS } from '../../constants/nba.constants';
import GamesModal from '../games-modal/games-modal';

const RosterCard: FC<any> = ({ rosterPlayer }) => {
  const [showModal, setShowModal] = useState(false);
  const [games, setGames] = useState<BoxscorePlayer[]>([]);

  const openModal = (playerId: number, season: number) => {
    setGames([]);
    fetch(`/api/games/${playerId}?season=${season}`)
    .then((res) => res.json())
    .then((data) => {
      setShowModal(true);
      setGames(data);
    });

  };

  return (
    <div className="overflow-x-auto relative shadow-md mt-4 bg-white sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-900 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="py-3 px-4">
              Season
            </th>
            <th scope="col" className="py-3 px-4">
              Team
            </th>
            <th scope="col" className="py-3 px-4">
              Age
            </th>
            {ROSTER_KEYS.map((key) => (
              <th key={key} scope="col" className="py-3 px-4">
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rosterPlayer?.length &&
            rosterPlayer.map((roster: any, index: number) => (
              <tr key={roster.id} className={classNames('border-b', index % 2 ? 'bg-gray-50' : 'bg-white')}>
                <th scope="row" className="py-3 px-4 font-medium  whitespace-nowrap">
                  <button
                    className="text-blue-500 background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => openModal(roster.playerId, roster.season)}
                  >
                    {roster.season}
                  </button>
                </th>
                <td className="py-3 px-4">{roster.team?.fullName}</td>
                <td className="py-3 px-4">{roster.age}</td>
                {ROSTER_KEYS.map((key) => (
                  <td key={key} className="py-3 px-4">
                    {roster[key] ? roster[key].toFixed(1) : 0}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      <GamesModal showModal={showModal} setShowModal={setShowModal} games={games} />
    </div>
  );
};

export default RosterCard;
