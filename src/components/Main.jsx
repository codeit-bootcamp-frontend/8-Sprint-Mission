import React from "react";
import PageNavBar from "./PageNavBar";
import Items from "../pages/Items/Items";
import "./Main.css";
import "./Header.css";
import "../styles/mediaquery.css";

function Main() {
  return (
    <main className="main">
      <Items></Items>
      <PageNavBar></PageNavBar>
    </main>
  );
}

export default Main;
