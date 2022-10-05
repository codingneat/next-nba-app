import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nba App</title>
        <meta name="description" content="Nba app generated with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/api-teams">
        <a>Server side: Api Teams</a>
      </Link>
    </>
  );
};

export default Home;
