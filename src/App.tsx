import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./router/RootLayout";
import Items from "./pages/Items";
import AddItems from "./pages/AddItem";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index></Route>
          <Route path="items">
            <Route index element={<Items />}></Route>
            <Route path=":productSlug" element={<Products />}></Route>
          </Route>
          <Route path="additem" element={<AddItems />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
