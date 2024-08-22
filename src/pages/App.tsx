import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AuthProvider from 'core/config/context/AuthContext';
import Nav from './nav/Nav';
import Home from './home/Home';
import Products from './products/Products';
import AddItem from './addItem/AddItem';
import Board from './board/Board';
import Page404 from './error/Page404';
import ProductDetail from './products/ProductDetail';
import Auth from './auth/Auth';

import { GlobalStyles } from 'core/styles/GlobalStyles';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AuthProvider>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<Home />} />
            <Route path="/items">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path="/board" element={<Board />} />
            <Route path="/addItem" element={<AddItem />} />
            <Route path="*" element={<Page404 />} />
          </Route>
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/signUp" element={<Auth isLogin={false} />} />
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
