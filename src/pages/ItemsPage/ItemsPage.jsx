import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./ItemsPage.scss";

function ItemsPage() {
  return (
    <main className="itemsPage">
      <BestItemsSection />
      <AllItemsSection />
    </main>
  );
}

export default ItemsPage;
