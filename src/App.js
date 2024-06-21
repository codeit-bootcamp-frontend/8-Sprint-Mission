import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/HeaderComponent/Header";
import AddItemPage from "./pages/AddItemPage/AddItemPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<MarketPage />} />
        <Route path="/addItem" element={<AddItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
