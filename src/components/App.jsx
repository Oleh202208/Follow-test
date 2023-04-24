import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import Layout from './Layout';
import 'modern-normalize';

const Home = lazy(() => import('Page/Home/Home'));
const TweetsPage = lazy(() => import('Page/TweetsPage/TweetsPage'));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tweets" element={<TweetsPage />} />
          {/* <Route path="*" element={<Home />} /> */}
        </Route>
      </Routes>
    </>
  );
};
