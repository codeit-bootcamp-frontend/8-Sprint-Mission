import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItem from './pages/AddItem';
import Items from './pages/Items';
import Board from './pages/Board';
import Login from './pages/Login';
import Notfound from './pages/Notfound';
import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 일시적 확인용 메인으로 addItems 세팅 */}
        <Route path="/" element={<AddItem />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/items" element={<Items />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
