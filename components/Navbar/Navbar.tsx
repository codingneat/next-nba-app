import { FC } from 'react';
import Image from 'next/image';

import logo from '../../public/logo.png';

const Navbar: FC = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-cente">
          <Image src={logo} alt="Next Nba App Logo" width={35} height={35} />
          <span className=" ml-5 self-center text-xl font-semibold whitespace-nowrap ">NBA APP</span>
        </a>
        <div className="w-auto">
          <ul className="flex p-4 rounded-lg border-gray-100 flex-row space-x-8 mt-0 text-sm font-medium border-0 bg-white">
            <li>
              <a
                href="#"
                className="block text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent border-0 hover:text-blue-700 p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
