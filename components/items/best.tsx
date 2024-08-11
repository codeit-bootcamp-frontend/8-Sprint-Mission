"use client";

import { useQuery } from "@tanstack/react-query";

import { useProductsQueryKey } from "@/lib/hooks";
import { getProducts } from "@/lib/actions";
import { getBestPageSize } from "@/lib/utils";
import { ProductData, ProductsQuery } from "@/lib/definitions";
import { ProductSkeletons } from "@/components/skeletons";
import Item from "./Item";

export default function BestItems() {
  const pageSize = getBestPageSize(innerWidth);
  const { queryKey } = useProductsQueryKey(pageSize, "favorite", "best");
  const { data, isPending, isError } = useQuery<ProductData>({
    queryKey,
    queryFn: async ({ queryKey, signal }) => {
      const queries = queryKey[1] as ProductsQuery;
      return getProducts({ queries, signal });
    },
  });

  if (isPending) {
    return (
      <section className='px-1 xl:container xl:mx-auto'>
        <h1 className='font-bold'>베스트 상품</h1>
        <ProductSkeletons pageSize={pageSize} />
      </section>
    );
  }

  if (isError) {
    return <div>error...</div>;
  }

  return (
    <section className='px-1 xl:container xl:mx-auto'>
      <h1 className='font-bold'>베스트 상품</h1>
      <ul className='grid grid-flow-col auto-cols-fr gap-x-1'>
        {Array(pageSize)
          .fill(0)
          .map((_, index) => {
            if (!data.list[index]) return <li key={`temp-${index}`}></li>;
            const { id, ...product } = data.list[index];
            return <Item key={id} {...product} />;
          })}
      </ul>
    </section>
  );
}
