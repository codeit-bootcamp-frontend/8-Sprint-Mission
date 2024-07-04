import "./assets/styles/reset.css";
import "./assets/styles/global.css";

import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import SigninPage from "./pages/Auth/SigninPage";
import UsedMarketPage from "./pages/Market/UsedMarketPage";
import AddItemPage from "./pages/Market/AddItemPage";
import FaqPage from "./pages/Faq/FaqPage";
import PrivacyPage from "./pages/Privacy/PrivacyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route exact index element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signin" element={<SigninPage />} />
      <Route exact path="/items" element={<UsedMarketPage />} />
      <Route exact path="/additem" element={<AddItemPage />} />
      <Route exact path="/privacy" element={<PrivacyPage />} />
      <Route exact path="/faq" element={<FaqPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
