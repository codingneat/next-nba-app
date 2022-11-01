'use client';

import Image, { StaticImageData } from 'next/image';
import { FC, useState } from 'react';

import playerImage from '../../public/player.jpeg';

const PlayerCard: FC<any> = ({ playerDetail }) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(
    `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerDetail?.player?.id}.png`
  );

  return (
    <div className="flex flex-col items-center p-5 bg-white rounded-lg border shadow-md md:flex-row">
      <div className="relative w-[290px] h-[160px]">
        <Image
          className="rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={imgSrc}
          onError={() => {
            setImgSrc(playerImage);
          }}
          alt={`${playerDetail?.player?.firstName} ${playerDetail?.player?.lastName} Photo`}
          fill
        />
      </div>
      <div className="flex flex-col p-1 leading-normal w-full items-center justify-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 pb-5">
          {playerDetail?.player?.firstName} {playerDetail?.player?.lastName}
        </h5>
        <div className="mb-3 font-normal text-gray-800 flex flex-col md:flex-row justify-around w-full">
          <ul className="space-y-1 max-w-md list-disc list-inside mb-1">
            <li>
              School: <span className="font-bold">{playerDetail?.player?.school}</span>
            </li>
            <li>
              Country: <span className="font-bold">{playerDetail?.player?.country}</span>
            </li>
            <li>
              Birthday:{' '}
              <span className="font-bold">
                {!!playerDetail?.player?.birthday && playerDetail?.player?.birthday.toString().substring(0, 10)}
              </span>
            </li>
          </ul>
          <ul className="space-y-1 max-w-md list-disc list-inside mb-1">
            <li>
              Height: <span className="font-bold">{playerDetail?.height}</span>
            </li>
            <li>
              Weight: <span className="font-bold">{playerDetail?.weight}</span>
            </li>
            <li>
              Jersey: <span className="font-bold">{playerDetail?.jersey}</span>
            </li>
          </ul>
          <ul className="space-y-1 max-w-md list-disc list-inside mb-1">
            <li>
              Position: <span className="font-bold">{playerDetail?.player?.position}</span>
            </li>
            <li>
              Years in NBA:{' '}
              <span className="font-bold">
                {playerDetail?.nbaDebutYear} {!!playerDetail?.nbaToYear && `/ ${playerDetail?.nbaToYear}`}
              </span>
            </li>
            <li>
              Team: <span className="font-bold">{playerDetail?.player?.team?.fullName}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
