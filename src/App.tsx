import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AddItem from "./pages/Item/AddItem";
import Items from "./pages/Item/Items";
import ItemsPage from "./pages/Item/ItemsPage";
import Board from "./pages/Board/Board";
import Login from "./pages/Auth/Login";
import Notfound from "./pages/Error/Notfound";
import "./assets/css/style.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 일시적 확인용 메인으로 Items 세팅 */}
        <Route path="/" element={<Items />} />
        <Route path="/items">
          <Route index element={<Items />} />
          <Route path=":productId" element={<ItemsPage />} />
        </Route>
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/boards" element={<Board />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
