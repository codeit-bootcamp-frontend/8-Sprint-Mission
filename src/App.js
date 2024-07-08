import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddItemPage from "./pages/AddItemPage/AddItemPage.jsx";
import MarketPage from "./pages/MarketPage/MarketPage.jsx";
import ProductDetail from "./pages/MarketPage/components/ProductDetail.jsx";
import { React } from "react";
import { ItemProvider } from "../src/context/ItemContext.jsx";

function App() {
  return (
    <ItemProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="items" element={<MarketPage />} />
            <Route path="/additem" element={<AddItemPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ItemProvider>
  );
}

export default App;
