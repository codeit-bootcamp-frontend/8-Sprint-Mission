import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Products from "./products/Products";
import AddItem from "./addItem/AddItem";
import Board from "./board/Board";
import Page404 from "./error/Page404";
import ProductDetail from "./products/ProductDetail";

import { GlobalStyles } from "core/styles/GlobalStyles";
import Auth from "./auth/Auth";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route path="/index" element={<Home />}/>
          <Route path="/items">
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/board" element={<Board />} />
          <Route path="/addItem" element={<AddItem />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/signIn" element={<Auth isLogin={true}/>}/>
        <Route path="/signUp" element={<Auth isLogin={false}/>}/>
      </Routes>
      
      
    </div>
  );
};

export default App;
