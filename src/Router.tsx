import App from "./App";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddItem from "./pages/AddItem";
import ProductId from "./pages/Items/ProductId";

function AppRouter() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/items">
              <Route index element={<Items />} />
              <Route path=":productId" element={<ProductId />} />
            </Route>
            <Route path="/additem" element={<AddItem />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default AppRouter;
