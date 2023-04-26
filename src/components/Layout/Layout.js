import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Navigation } from '../Navigation/Navigation';
import { Footer, Main, TextFooter } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <TextFooter> &#169; Twets 2023</TextFooter>
      </Footer>
    </>
  );
};
export default Layout;
