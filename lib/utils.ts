import { isServer, QueryClient } from "@tanstack/react-query";
import { ProductsQuery } from "./definitions";

export function getPageSize(width: number): { best: number; total: number } {
  if (width <= 425) return { best: 1, total: 6 };
  if (width <= 728) return { best: 2, total: 8 };
  return { best: 4, total: 10 };
}

export function getBestPageSize(width: number): number {
  return getPageSize(width).best;
}

export function getTotalPageSize(width: number): number {
  return getPageSize(width).total;
}

export function initialProductsQueryKey(
  pageSize: number,
  orderBy: string,
): [string, ProductsQuery] {
  return [
    "products",
    {
      pageSize,
      orderBy,
      page: 1,
      keyword: "",
    },
  ];
}
