// CSS
import "./styles/base/reset.css";
import "./styles/base/global.css";

import { Routes, Route } from "react-router-dom";

import ItemPage from "./pages/ItemPage";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signin" element={<Signin />} />
      <Route exact path="/items" element={<ItemPage />} />
    </Routes>
  );
}

export default App;
