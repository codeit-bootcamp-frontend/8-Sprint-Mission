import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/HeaderComponent/Header";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products">
          <Route index element={<MarketPage />} />
          <Route path="addProduct" element={<AddProductPage />} />
          <Route path=":productId" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
