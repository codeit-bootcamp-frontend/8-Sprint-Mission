import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Items from "./pages/Items";
import Layout from "./layouts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route element={<Layout authed={true} />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </App>
  </BrowserRouter>
);
