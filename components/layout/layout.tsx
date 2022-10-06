import Navbar from '../navbar/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-auto w-screen min-h-full flex flex-col bg-gray-100">
      <Navbar />

      <main className="container mx-auto my-0 h-full py-3">{children}</main>
    </div>
  );
};

export default Layout;
