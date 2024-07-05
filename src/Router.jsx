import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import HomePage from './Home/HomePage.jsx';
import CommunityPage from './pages/community/CommunityPage.jsx';
import MarketPage from './pages/market/MarketPage.jsx';
import ItemPage from './pages/item/ItemPage.jsx';
import AddItemPage from './pages/AddItem/AddItemPage.jsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.jsx';

function Router() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='community' element={<CommunityPage />} />
            <Route path='items'>
              <Route index element={<MarketPage />} />
              <Route path=':productId' element={<ItemPage />} />
            </Route>
            <Route path='additem' element={<AddItemPage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default Router;
