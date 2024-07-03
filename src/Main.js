import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="forum" />
          <Route path="items">
            <Route index element={<ItemsPage />} />
            <Route path="additem" element={<AddItemPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
