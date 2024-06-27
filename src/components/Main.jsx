import React from "react";
import PageNavBar from "./items/PageNavBar";
import Items from "../pages/Items";
import "./Main.css";
import "./common/Header.css";
import "../assets/styles/mediaquery.css";

function Main() {
  return (
    <main className="main">
      <Items></Items>
      <PageNavBar></PageNavBar>
    </main>
  );
}

export default Main;
