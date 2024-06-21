import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import SaleItemsSection from "./components/SaleItemsSection";
import "./ItemsPages.scss";

function ItemsPage() {
  return (
    <>
      <BestItemsSection />
      <SaleItemsSection />
    </>
  );
}

export default ItemsPage;
