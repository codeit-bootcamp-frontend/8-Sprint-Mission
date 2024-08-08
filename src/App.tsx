import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Items from "./pages/Items";
import ItemInfo from "./pages/ItemInfo";
import AddItem from "./pages/AddItem";
import Community from "./pages/Community";
import 404 from "./pages/404";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Items" element={<Items />} />
        <Route path="/Items/:productId" element={<ItemInfo />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/Community" element={<Community />} />
        <Route path="*" element={<404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
