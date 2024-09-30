import { useQuery } from "@tanstack/react-query";
import { getFavoriteProduct } from "../utils/http";

export function useFavoriteProducts(favoriteProductsQuery) {
  const { data, isPending, error } = useQuery({
    queryKey: ["favoriteProducts", favoriteProductsQuery],
    queryFn: () => getFavoriteProduct(favoriteProductsQuery),
  });

  return {
    favoriteProductsData: data?.list || [],
    favoriteProductsLoading: isPending,
    favoriteProductsError: error,
  };
}
