import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AddItemPage from "./pages/AddItemPage/AddItemPage.tsx";
import MarketPage from "./pages/MarketPage/MarketPage.tsx";
import ProductDetail from "./pages/MarketPage/components/ProductDetail.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import SignUp from "./pages/LoginPage/Signup.tsx";

import { ProductProvider } from "./context/ProductContext.tsx";
import CommunityFeedPage from "./pages/CommunityFeedPage/CommunityFeedPage.tsx";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/items" element={<MarketPage />} />
            <Route path="/additem" element={<AddItemPage />} />
            <Route path="/community" element={<CommunityFeedPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
