import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nba App</title>
        <meta name="description" content="Nba app generated with Nextjs" />
      </Head>

      <ul className="w-auto text-2xl font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
        <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams">
            <a>Teams: Server side</a>
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams/static-teams">
            <a>Teams: Static site generation</a>
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams/client-teams">
            <a>Teams: Client side</a>
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams/prisma-teams">
            <a>Teams: Basic Prisma Implementation</a>
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/players">
            <a>Players: Static site generation</a>
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/players/959">
            <a>Player Card Example: Static site generation</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
