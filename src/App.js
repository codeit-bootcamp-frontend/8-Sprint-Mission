import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/MarketPage/MarketPage";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/HeaderComponent/Header";
import AddProductPage from "./pages/AddProductPage/AddProductPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items">
          <Route index element={<MarketPage />} />
          <Route path="addItem" element={<AddProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
