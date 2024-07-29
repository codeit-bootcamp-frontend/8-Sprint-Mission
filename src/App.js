import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPage from "./pages/Market/Market.jsx";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Layout/Navbar.jsx";
import AddItems from "./pages/AddItem/AddItems.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="withHeader">
        <Routes>
          <Route index element={<Home />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="additem" element={<AddItems />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
