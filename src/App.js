import "./styles/base/reset.css";
import "./styles/base/global.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Items from "./pages/Items";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/items" element={<Items />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
