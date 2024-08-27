import { useState } from "react";
import {
  FnQuery,
  FetchProductType,
  FetchResponse,
} from "./@types/useAsyncStatus";

export function useAsyncStatus<T>(
  fetchFn: (args: FnQuery) => Promise<FetchResponse<T>>,
  initialValue: T
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchData, setFetchData] = useState<T>(initialValue);
  const [totalItem, setTotalItem] = useState<number>(0);

  const fetchProducts: FetchProductType = async (args: FnQuery) => {
    setLoading(true);
    try {
      const { query } = args;
      const data = await fetchFn(args);
      setFetchData(data.list);
      const maxPage = Math.ceil(data.totalCount / query.size);
      setTotalItem(maxPage);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    fetchData,
    setFetchData,
    fetchProducts,
    totalItem,
  };
}
