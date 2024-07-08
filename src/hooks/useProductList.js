import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';

const useProducts = (initialOrderBy, getPageSize) => {
  const [orderBy, setOrderBy] = useState(initialOrderBy);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [totalPageNum, setTotalPageNum] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoad = async ({ orderBy, page, pageSize }) => {
    setLoading(true);
    try {
      const products = await getProducts({ orderBy, page, pageSize });
      setProducts(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error('Failed to load products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);

    handleLoad({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]);

  return {
    orderBy,
    setOrderBy,
    products,
    page,
    setPage,
    pageSize,
    totalPageNum,
    loading,
  };
};

export default useProducts;
