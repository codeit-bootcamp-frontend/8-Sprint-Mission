import 'styles/@shared/global/init.css';
import GlobalStyle from 'styles/@shared/global/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from 'components/@shared/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Market from 'pages/Market';
import AddProduct from 'pages/AddProduct';
import ProductDetail from 'pages/ProductDetail';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/items">
              <Route index element={<Market />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/additem" element={<AddProduct />} />
            <Route path="*" element={<div>해당 페이지는 없는 페이지입니다.</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
