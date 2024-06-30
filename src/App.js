import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header.jsx";
import HomePage from "./pages/HomePage/HomePage";
import AddItemPage from "./pages/AddItemPage/AddItemPage.jsx";
import MarketPage from "./pages/MarketPage/MarketPage.jsx";
import { React } from "react";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="/additem" element={<AddItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
