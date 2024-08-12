import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/Market/MarketPage";
import AddItemPage from "./pages/AddItems/AddItemPage";
import HomePage from "./pages/Home/HomePage";
import ProductdetailPage from "./pages/ProductDetail/ProductDetailPage.tsx";
import "../src/css/global.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market">
          <Route index element={<MarketPage />} />
          <Route path=":productId" element={<ProductdetailPage />} />
        </Route>
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
