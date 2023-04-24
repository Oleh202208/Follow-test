import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Navigation } from './Navigation/Navigation';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
