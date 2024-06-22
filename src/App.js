import "./styles/base/reset.css";
import "./styles/base/global.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Items from "./pages/Items";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/items" element={<Items />} />
    </Routes>
  );
}

export default App;
