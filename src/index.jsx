import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./assets/styles/global.css";
import "./assets/styles/mediaquery.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
