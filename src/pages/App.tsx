import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Products from "./products/Products";
import AddItem from "./addItem/AddItem";
import Board from "./board/Board";
import Page404 from "./error/Page404";
import { GlobalStyles } from "core/styles/GlobalStyles";
import ProductDetail from "./products/ProductDetail";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items">
          <Route index element={<Products />} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
        <Route path="/board" element={<Board />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
