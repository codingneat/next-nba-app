import classNames from 'classnames';
import React, { Dispatch, FC, SetStateAction } from 'react';

import { ROSTER_KEYS } from '../../constants/nba.constants';

export interface GameModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  games: any;
}

const GamesModal: FC<GameModalProps> = ({ showModal, setShowModal, games }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-lg font=semibold pr-10">Games History</h3>
                  <button className="bg-transparent border-0  float-right" onClick={() => setShowModal(false)}>
                    <span className="text-white leading-none opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative m-6 flex-auto h-96 overflow-auto">
                  <table className="w-full text-sm text-left text-gray-900 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3 px-4">
                          Game
                        </th>
                        {ROSTER_KEYS.map((key) => (
                          <th key={key} scope="col" className="py-3 px-4">
                            {key.toUpperCase()}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {games?.length &&
                        games.map((game: any, index: number) => (
                          <tr key={game.id} className={classNames('border-b', index % 2 ? 'bg-gray-50' : 'bg-white')}>
                            <th scope="row" className="py-3 px-4 font-medium  whitespace-nowrap">
                              {game.game?.gameCode}
                            </th>
                            {ROSTER_KEYS.map((key) => (
                              <td key={key} className="py-3 px-4">
                                {game[key]}
                              </td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-primary-500 text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default GamesModal;
