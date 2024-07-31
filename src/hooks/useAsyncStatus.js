import { useState } from 'react';

export function useAsyncStatus(fetchFn, initialValue) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState(initialValue);
  const [totalItem, setTotalItem] = useState(0);

  const fetchProducts = async args => {
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
