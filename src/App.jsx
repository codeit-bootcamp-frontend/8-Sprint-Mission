import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Items from "./pages/Items/Items";
import AddItem from "./pages/AddItem/AddItem";
import Community from "./pages/Community/Community";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/AddItem" element={<AddItem />} />
          <Route path="/Community" element={<Community />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
