import './styles/reset.css';
import Home from './pages/home/Home.js';
import Items from './pages/items/Items.js';
import Login from './pages/login/Login.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './pages/additem/AddItem.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/login" element={<Login />} />
        <Route path="additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
