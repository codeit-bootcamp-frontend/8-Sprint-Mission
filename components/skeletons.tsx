import { Fragment } from "react";
import NavBar from "./items/navbar";
import { Product, ProductsQuery } from "@/lib/definitions";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function BestItemsSkeleton() {
  return <div>로딩중</div>;
}

export function ProductSkeleton() {
  return (
    <li className={`${shimmer} flex flex-col gap-y-[0.375rem] w-full`}>
      <div className='relative w-full pt-[100%] overflow-hidden'>
        <div className='absolute top-0 left-0 bg-gray-200 w-full h-full rounded-lg'></div>
      </div>
      <p className='w-full h-5 rounded-lg bg-gray-200'></p>
      <p className='w-full h-6 rounded-lg bg-gray-200'></p>
      <p className='w-full h-6 rounded-lg bg-gray-200'></p>
    </li>
  );
}

export function ProductSkeletons({ pageSize }: { pageSize: number }) {
  return (
    <ul className={`relative grid grid-flow-col auto-cols-fr gap-x-1`}>
      {Array(pageSize)
        .fill(0)
        .map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
    </ul>
  );
}

export function TotalItemsSkeleton({
  keyword,
  orderBy,
  midIndex,
}: Omit<ProductsQuery, "page" | "pageSize"> & { midIndex: number }) {
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
