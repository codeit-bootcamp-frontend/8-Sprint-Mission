import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { getProducts } from "../../core/api";
import useFetch from "../../lib/hooks/useFetch";

// count items according to pageSize
const countPageItems = () => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth < 1200) {
    return 2;
  } else {
    return 4;
  }
};

function BestItemsContainer() {
  const [pageSize, setPageSize] = useState(countPageItems());
  const { data: itemsData } = useFetch(
    getProducts,
    { page: 1, pageSize, orderBy: "favorite" },
    { list: [] }
  );

  const items = itemsData.list;

  const measurePageSize = () => {
    const newPageSize = countPageItems();
    setPageSize(newPageSize);
  };

  console.log(items);
  // get pageSize on window resize
  useEffect(() => {
    window.addEventListener("resize", measurePageSize);

    return () => {
      window.removeEventListener("resize", measurePageSize);
    };
  }, [pageSize]);

  return (
    <section className="best-items-container">
      <h1 className="section-title">베스트 상품</h1>
      <div className="best-items-list">
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default BestItemsContainer;
