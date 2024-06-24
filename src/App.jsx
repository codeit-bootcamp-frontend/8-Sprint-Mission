import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/styles/common.css";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/items" element={<Items />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
