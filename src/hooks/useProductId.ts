import { useState, useEffect } from "react";
import { getProductById } from "./../services/api";
import { Product, UseProductIdReturn } from "../types/productTypes";

const useProductId = (productId: number): UseProductIdReturn => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const fetchedProduct: Product = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("알 수 없는 오류가 발생했습니다."));
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, isLoading, error };
};

export default useProductId;
