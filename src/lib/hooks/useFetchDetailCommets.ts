import { ProductDetailComment } from "core/Interface/Product";
import {
  fetchProductComment,
  ProductDetailCommentParams,
} from "lib/api/product";
import { useCallback, useEffect, useState } from "react";

const useFetchDetailComments = ({
  productId,
  limit,
  cursor = null,
}: ProductDetailCommentParams) => {
  const [isError, setIsError] = useState(false);
  const [detailComments, setDetailComments] = useState<ProductDetailComment[]>(
    []
  );
  const [nextCursor, setNextCursor] = useState<number | null>(null);

  const handleDetailComments = useCallback(async () => {
    try {
      setIsError(false);
      const result = await fetchProductComment({ productId, limit, cursor });
      const { list, nextCursor } = result;
      setDetailComments(list);
      setNextCursor(nextCursor);
    } catch (error) {
      setIsError(true);
    }
  }, [productId, limit, cursor]);

  useEffect(() => {
    handleDetailComments();
  }, [handleDetailComments]);

  return { detailComments, nextCursor, isError };
};

export default useFetchDetailComments;
