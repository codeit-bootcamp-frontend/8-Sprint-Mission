import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Items from "./pages/Items";
import AddItem from "./pages/AddItem";
import DetailItem from "./components/items/itemsDetail/DetailItem.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="items">
            <Route index element={<Items />}></Route>
            <Route path=":itemId" element={<DetailItem />}></Route>
          </Route>
          <Route path="additem" element={<AddItem />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
