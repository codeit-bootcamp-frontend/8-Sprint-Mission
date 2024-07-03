import './styles/reset.css';
import Home from './pages/home/Home.jsx';
import Items from './pages/items/Items.jsx';
import Login from './pages/login/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './pages/additem/AddItem.jsx';

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
