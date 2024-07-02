import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarketPage from './components/pages/MarketPage/MarketPage';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import AddItemPage from './components/pages/AddItemPage/AddItemPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import BoardPage from './components/pages/BoardPage/BoardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="items" element={<MarketPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="additem" element={<AddItemPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
