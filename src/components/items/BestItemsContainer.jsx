import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { getProducts } from "../../core/api";
import useFetch from "../../lib/hooks/useFetch";
import countPageItems from "../../lib/utils/countPageItems";

function BestItemsContainer() {
  const [pageSize, setPageSize] = useState(countPageItems(1, 2, 4));
  const { data: itemsData } = useFetch(
    getProducts,
    { page: 1, pageSize, orderBy: "favorite" },
    { list: [] }
  );

  const items = itemsData.list;

  const measurePageSize = () => {
    const newPageSize = countPageItems(1, 2, 4);
    setPageSize(newPageSize);
  };

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
