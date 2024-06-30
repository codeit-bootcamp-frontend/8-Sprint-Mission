import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Layout/Header';
import Market from './pages/market/Market';
import HomePage from './Home/HomePage';
import AddItemPage from './pages/AddItem/AddItemPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='items' element={<Market />} />
          <Route path='additem' element={<AddItemPage />} />
          <Route path='*' element={<HomePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
