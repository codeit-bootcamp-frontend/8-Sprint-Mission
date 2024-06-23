import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./ItemsPage.scss";

function ItemsPage() {
  return (
    <div className="itemsPage">
      <BestItemsSection />
      <AllItemsSection />
    </div>
  );
}

export default ItemsPage;
