import './styles/reset.css';
import Home from './pages/home/Home.jsx';
import Items from './pages/items/Items.jsx';
import Login from './pages/login/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddItem from './pages/additem/AddItem.jsx';
import DetailItems from './pages/DetailItems.jsx';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items">
          <Route index element={<Items />} />
          <Route path=":selectItem" element={<DetailItems />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
