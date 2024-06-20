import React, { useState } from "react";
import ItemContainer from "./Item";

function BestItems() {
  const [items, setItems] = useState([]);

  return (
    <section className="best-items-container">
      <h1 className="section-title">베스트 상품</h1>
      <div className="best-items-list">
        {items.map((item) => (
          <ItemContainer item={item} />
        ))}
      </div>
    </section>
  );
}

export default BestItems;
