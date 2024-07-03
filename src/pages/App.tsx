import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Products from "./products/Products";
import AddItem from "./addItem/AddItem";
import Board from "./board/Board";
import Page404 from "./error/Page404";
import { GlobalStyles } from "core/styles/GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Products />} />
        <Route path="/board" element={<Board />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
