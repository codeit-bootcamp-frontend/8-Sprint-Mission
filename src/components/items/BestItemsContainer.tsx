import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { getProducts } from "../../core/api";
import useFetch from "../../lib/hooks/useFetch";
import countPageItems from "../../lib/utils/countPageItems";
import { Product } from "../../DTO/product";

function BestItemsContainer() {
  const [pageSize, setPageSize] = useState<number>(countPageItems(1, 2, 4));
  const { data: itemsData } = useFetch(
    getProducts,
    { page: 1, pageSize, orderBy: "favorite" },
    { list: [] }
  );

  const items: Product[] = itemsData.list;

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
    <section className="flex flex-col gap-6">
      <h1 className="font-bold text-xl">베스트 상품</h1>
      <div className="grid grid-cols-4 gap-6">
        {items.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default BestItemsContainer;
