import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getAllProduct } from "../utils/http";

export function useProducts(allProductQuery) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["allProducts", allProductQuery],
    queryFn: () => getAllProduct(allProductQuery),
    placeholderData: keepPreviousData,
  });

  const maxPage = Math.ceil(data?.totalCount / allProductQuery.size);

  return {
    allProductsData: data?.list,
    allProductsLoading: isPending,
    allProductsIsError: isError,
    allProductsError: error,
    maxProducts: maxPage,
  };
}
