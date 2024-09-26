import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MarketPage from "./pages/Market/Market";
import Home from "./pages/Home/Home";
import Navbar from "./components/Layout/Navbar";
import AddItems from "./pages/AddItem/AddItems";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import "./style/global.css";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";

function MainContent() {
  const location = useLocation();
  const hideNavbar = ["/signup", "/login"];
  return (
    <>
      {!hideNavbar.includes(location.pathname) && <Navbar />}
      <div className="withHeader">
        <Routes>
          <Route index element={<Home />} />
          <Route path="items" element={<MarketPage />} />
          <Route path="items/:productId" element={<ItemDetail />} />
          <Route path="additem" element={<AddItems />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
