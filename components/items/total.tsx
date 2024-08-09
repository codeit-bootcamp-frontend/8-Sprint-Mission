import { ChangeEvent } from "react";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";

import { useProductsQueryKey } from "@/lib/hooks";
import { getProducts } from "@/lib/actions";
import { getTotalPageSize } from "@/lib/utils";
import { ProductData, Products, ProductsQuery } from "@/lib/definitions";
import Item from "@/components/items/Item";
import DropDown from "./dropdown";
import { ProductSkeletons } from "../skeletons";
import NavBar from "./navbar";

const renderRow = (row1: Products, midIndex: number) =>
  Array(midIndex)
    .fill(0)
    .map((_, index) => {
      if (!row1[index]) return <li key={`temp-${index}`}></li>;
      const { id, ...product } = row1[index];
      return <Item key={id} {...product} />;
    });

export default function TotalItems() {
  const pageSize = getTotalPageSize(innerWidth);
  const { queryKey, updateOrderBy, updateKeyword } = useProductsQueryKey(
    pageSize,
    "recent",
    "total",
  );
  const { data, isPending, isError } = useQuery<ProductData>({
    queryKey,
    queryFn: async ({ queryKey, signal }) => {
      const queries = queryKey[1] as ProductsQuery;
      return getProducts({ queries, signal });
    },
  });

  const { orderBy, keyword } = queryKey[1];
  const midIndex = pageSize / 2;

  if (isPending) {
    return (
      <section className='px-1 xl:container xl:mx-auto'>
        <h1 className='font-bold'>전체 상품</h1>
        <NavBar keyword={keyword} orderBy={orderBy} />
        <ul className='grid grid-flow-col auto-cols-fr gap-x-1'>
          <ProductSkeletons pageSize={midIndex} />
        </ul>
        <ul className='grid grid-flow-col auto-cols-fr gap-x-1'>
          <ProductSkeletons pageSize={midIndex} />
        </ul>
      </section>
    );
  }

  if (isError) {
    return <div>error...</div>;
  }

  const itemsLength = data.list.length;
  if (!itemsLength) {
    return <div>데이터가 존재하지 않습니다</div>;
  }

  const tl = itemsLength <= midIndex;
  let row1: Products;
  let row2: Products;

  if (tl) {
    row1 = data.list.slice(0);
    row2 = [];
  } else {
    row1 = data.list.slice(0, midIndex);
    row2 = data.list.slice(midIndex);
  }

  return (
    <section className='px-1 xl:container xl:mx-auto'>
      <h1 className='font-bold'>전체 상품</h1>
      <NavBar keyword={keyword} orderBy={orderBy} />
      <div>
        <ul className='grid grid-flow-col auto-cols-fr gap-x-1'>{renderRow(row1, midIndex)}</ul>
        {!tl && (
          <ul className='grid grid-flow-col auto-cols-fr gap-x-1'>{renderRow(row2, midIndex)}</ul>
        )}
      </div>
    </section>
  );
}
