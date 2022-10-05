import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Nba App</title>
        <meta name="description" content="Nba appgenerated with Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen flex flex-col bg-gray-200">
        <Navbar />

        <main className="container m-auto h-screen pt-3">dd</main>
      </div>
    </>
  );
};

export default Home;
