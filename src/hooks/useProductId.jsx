import { useState, useEffect } from "react";
import { getProductById } from "../services/api";

const INITIAL_PRODUCT = {
  favoriteCount: 0,
  images: "",
  tags: [],
  price: 0,
  description: "",
  name: "",
  isFavorite: false,
};

const useProductId = (productId) => {
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const fetchedProduct = await getProductById(productId);
        setProduct(fetchedProduct);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, isLoading, error };
};

export default useProductId;
