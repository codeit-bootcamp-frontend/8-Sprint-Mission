import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import PandaMarketApp from './app/PandaMarket';
import HomePage from './page/Home';
import LoginPage from './page/auth/Login';
import SignupPage from './page/auth/Singup';
import CommunityPage from './page/Community';
import MarketPage from './page/Market';
import ItemPage from './page/Item';
import AddItemPage from './page/AddItem';
import PrivacyPage from './page/unused/Privacy';
import FaqPage from './page/unused/Faq';
import NotFoundPage from './page/NotFound';

function Router() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PandaMarketApp />}>
            <Route index element={<HomePage />} />
            <Route path='community' element={<CommunityPage />} />
            <Route path='items'>
              <Route index element={<MarketPage />} />
              <Route path=':productId' element={<ItemPage />} />
            </Route>
            <Route path='additem' element={<AddItemPage />} />
            <Route path='privacy' element={<PrivacyPage />} />
            <Route path='faq' element={<FaqPage />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Router;
