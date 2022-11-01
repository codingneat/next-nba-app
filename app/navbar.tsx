'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import logo from '../public/logo.png';

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Next Nba App Logo" width={35} height={35} />
          <span className=" ml-5 self-center text-xl font-bold text-primary-700 whitespace-nowrap ">NBA APP</span>
        </Link>
        <div className="w-auto">
          <ul className="flex p-4 rounded-lg border-gray-100 flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
            <li>
              <Link
                href="/"
                className={classNames(
                  'block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-primary-700 p-0',
                  pathname == '/' && 'text-primary-400 font-bold'
                )}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/teams"
                className={classNames(
                  'block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-primary-700 p-0',
                  pathname == '/teams' && 'text-primary-400 font-bold'
                )}
                aria-current="page"
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="/players"
                className={classNames(
                  'block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-primary-700 p-0',
                  pathname == '/players' && 'text-primary-400 font-bold'
                )}
                aria-current="page"
              >
                Players
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
