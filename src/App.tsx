import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/HeaderComponent/Header";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
