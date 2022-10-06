import Navbar from '../navbar/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="container m-auto h-screen pt-3">{children}</main>
    </div>
  );
};

export default Layout;
