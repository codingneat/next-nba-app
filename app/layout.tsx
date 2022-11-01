/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';

import Navbar from './navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
          <div className="h-auto w-screen min-h-full flex flex-col bg-gray-100">
            <Navbar />

            <main className="container mx-auto my-0 h-full py-3">{children}</main>
          </div>
      </body>
    </html>
  );
};

export default RootLayout;
