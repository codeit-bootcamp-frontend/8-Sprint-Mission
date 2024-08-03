import { Outlet } from 'react-router-dom';
import './PandaMarket.scss';
import AppHeader from './layout/Header';
import AppFooter from './layout/Footer';

function PandaMarketApp() {
  return (
    <>
      <AppHeader />

      <main>
        <Outlet />
      </main>

      <AppFooter />
    </>
  );
}

export default PandaMarketApp;
