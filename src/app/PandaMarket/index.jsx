import { Outlet } from 'react-router-dom';
import './style.css';
import Header from './layout/Header';

function PandaMarketApp() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PandaMarketApp;
