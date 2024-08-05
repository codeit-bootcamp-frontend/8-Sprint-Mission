import "./styles/reset.css";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddItem from "./pages/additem/AddItem";
import DetailItems from "./pages/DetailItems";

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
