import { BrowserRouter, Routes, Route } from "react-router-dom";
import itemListPage from "./pages/MarketPage";
import addItemPage from "./pages/addItemPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="market" element={<itemListPage />} />
        <Route path="additem" element={<addItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
