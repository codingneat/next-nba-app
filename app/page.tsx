import Link from 'next/link';

const Home = () => {
  return (
    <>
      <ul className="w-auto text-2xl font-medium text-gray-900 bg-white rounded-lg border border-gray-200">
        <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams">Teams: Server side</Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams/static-teams">Teams: Static site generation</Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams/client-teams">Teams: Client side</Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/teams/prisma-teams">
            Teams: Basic Prisma Implementation
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/players">
            Players: Static site generation
          </Link>
        </li>
        <li className="py-2 px-4 w-full border-b border-gray-200 hover:text-primary-700">
          <Link href="/players/959">Player Card Example: Static site generation</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
