import React from "react";
import ItemCard from "./ItemCard";

function BestItemsSection() {
  return (
    <section className="itemsPage__bestItemsSection">
      <h3 className="bestItemsSection__title">베스트 상품</h3>
      <div>{/* 아이템 카드 grid를 map()을 활용하여 구현 */}</div>
    </section>
  );
}

export default BestItemsSection;
