import { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import { Product, UseProductsReturn } from "../types/productTypes";

const useProducts = (
  initialOrderBy: string,
  getPageSize: () => number
): UseProductsReturn => {
  const [orderBy, setOrderBy] = useState<string>(initialOrderBy);
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(getPageSize());
  const [totalPageNum, setTotalPageNum] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoad = async ({
    orderBy,
    page,
    pageSize,
  }: {
    orderBy: string;
    page: number;
    pageSize: number;
  }) => {
    setLoading(true);
    try {
      const products = await getProducts({ orderBy, page, pageSize });
      setProducts(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (error) {
      console.error("Failed to load products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

    handleLoad({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
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
