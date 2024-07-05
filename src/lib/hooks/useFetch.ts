import { useCallback, useEffect, useState } from "react";
import { ProductDetailData, ProductDetailParams } from "core/Interface/Product";
import { fetchGetProductDetail } from "../api/product";

const INITIAL_PRODUCT_DETAIL = {
  id: 0,
  name: "",
  description: "",
  price: 0,
  tags: [],
  images: [],
  ownerId: 0,
  favoriteCount: 0,
  createAt: "",
  updateAt: "",
  isFavorite: false,
};

const useFetch = ({ productId }: ProductDetailParams) => {
  // const [isLoading, setIsLoading] = useState();
  const [errorMessage, setErrorMessage] = useState<Error>();
  const [productDetail, setProductDetail] = useState<ProductDetailData>(
    INITIAL_PRODUCT_DETAIL
  );
  const handleProductDetail = useCallback(async () => {
    try {
      setErrorMessage(undefined);
      const result = await fetchGetProductDetail({ productId });
      if (result.hasOwnProperty("id")) {
        setProductDetail(result);
      }
    } catch (error) {
      setErrorMessage(error as Error);
    }
  }, [productId]);

  useEffect(() => {
    handleProductDetail();
  }, [productId, handleProductDetail]);

  return { productDetail };
};

export default useFetch;
