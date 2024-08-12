import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/Layout/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Items from "./pages/Items";
import ItemInfo from "./pages/ItemInfo";
import AddItem from "./pages/AddItem";
import Boards from "./pages/Boards";
import NotFound from "./pages/NotFound";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items/:productId" element={<ItemInfo />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
