import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/Market/MarketPage";
import AddItemPage from "./pages/AddItems/AddItemPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/additem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
