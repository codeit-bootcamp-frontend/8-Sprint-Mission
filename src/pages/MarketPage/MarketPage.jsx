import React from "react";
import BestProducts from "./components/BestProducts/BestProducts";
import SalesProducts from "./components/SalesProducts/SalesProducts";
import "./MarketPage.css";

function MarketPage(props) {
  return (
    <div className="market-container">
      <BestProducts />
      <SalesProducts />
    </div>
  );
}

export default MarketPage;
