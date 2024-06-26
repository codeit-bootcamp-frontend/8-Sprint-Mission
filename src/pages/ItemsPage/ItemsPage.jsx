import React from "react";
import BestItemsSection from "./components/BestItemsSection";
import AllItemsSection from "./components/AllItemsSection";
import "./ItemsPage.scss";

function ItemsPage() {
  return (
    // 헤더
    <div className="itemsPage">
      <BestItemsSection />
      <AllItemsSection />
    </div>
    // 푸터
  );
}

export default ItemsPage;
