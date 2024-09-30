import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../utils/http";

export function useProducts(allProductQuery) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["allProducts", allProductQuery],
    queryFn: () => getAllProduct(allProductQuery),
  });

  const maxPage = Math.ceil(data?.totalCount / allProductQuery.size);

  return {
    allProductsData: data?.list,
    allProductsLoading: isLoading,
    allProductsError: error,
    maxProducts: maxPage,
  };
}
