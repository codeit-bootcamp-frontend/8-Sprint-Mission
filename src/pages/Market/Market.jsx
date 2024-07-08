import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./Market.css";

function Market() {
  return (
    <div className="wrapper">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default Market;
