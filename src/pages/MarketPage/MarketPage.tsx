import React from "react";
import BestProducts from "./components/BestProducts/BestProducts";
import SalesProducts from "./components/SalesProducts/SalesProducts";
import "./MarketPage.css";

function MarketPage() {
  return (
    <main className="market-container">
      <BestProducts />
      <SalesProducts />
    </main>
  );
}

export default MarketPage;
