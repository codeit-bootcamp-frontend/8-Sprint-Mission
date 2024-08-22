import React, { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import { getProducts } from "core/api/productApi";
import useApiGet from "lib/hooks/useApiGet";
import countPageItems from "lib/utils/countPageItems";
import { ProductResponse } from "core/dtos/productDTO";

function BestItemsContainer() {
  const [pageSize, setPageSize] = useState<number>(countPageItems(1, 2, 4));
  const { data: itemsData } = useApiGet<ProductResponse>(
    getProducts,
    { page: 1, pageSize, orderBy: "favorite" },
    { list: [], totalCount: 0 }
  );

  const handlePageSize = () => {
    const newPageSize = countPageItems(1, 2, 4);
    setPageSize(newPageSize);
  };

  // get pageSize on window resize
  useEffect(() => {
    window.addEventListener("resize", handlePageSize);

    return () => {
      window.removeEventListener("resize", handlePageSize);
    };
  }, [pageSize]);

  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-bold text-xl">베스트 상품</h1>
      <ul className="grid grid-cols-4 gap-4 max-md:grid-cols-1 max-xl:grid-cols-2">
        {itemsData.list.map((item) => (
          <ItemContainer key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}

export default BestItemsContainer;
