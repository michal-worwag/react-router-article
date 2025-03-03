import Navigation from '@/components/navigation';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <>
      <h1 className='text-4xl font-bold'>Hello React Router</h1>
      <Navigation />
      <main className='flex flex-col items-center justify-center h-screen'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
