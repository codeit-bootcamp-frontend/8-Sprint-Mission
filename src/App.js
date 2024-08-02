import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AddItemPage from "./pages/AddItemPage/AddItemPage.tsx";
import MarketPage from "./pages/MarketPage/MarketPage.tsx";
import ProductDetail from "./pages/MarketPage/components/ProductDetail.tsx";

import { ItemProvider } from "../src/context/ItemContext.tsx";

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
