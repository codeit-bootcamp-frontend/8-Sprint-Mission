import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketPage from './components/pages/MarketPage/MarketPage';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AddItemPage from './components/pages/AddItemPage/AddItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<MarketPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
