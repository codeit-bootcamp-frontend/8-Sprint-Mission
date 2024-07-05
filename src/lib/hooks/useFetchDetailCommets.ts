import {
  fetchProductComment,
  ProductDetailCommentParams,
} from "lib/api/product";
import { useCallback, useEffect, useState } from "react";

const INITIAL_DETAIL_COMMENTS = [
  {
    id: 0,
    content: "",
    createdAt: "0000-00-00T00:00:00.000Z",
    updatedAt: "0000-00-00T00:00:00.000Z",
    writer: {
      id: 0,
      nickname: "",
      image: "",
    },
  },
];

const useFetchDetailComments = ({
  productId,
  limit,
  cursor = null,
}: ProductDetailCommentParams) => {
  const [detailComments, setDetailComments] = useState(INITIAL_DETAIL_COMMENTS);
  const [nextCursor, setNextCursor] = useState<number | null>(null);

  const handleDetailComments = useCallback(async () => {
    try {
      const result = await fetchProductComment({ productId, limit, cursor });
      const { list, nextCursor } = result;
      setDetailComments(list);
      setNextCursor(nextCursor);
    } catch (error) {
      console.log(error);
    }
  }, [productId, limit, cursor]);

  useEffect(() => {
    handleDetailComments();
  }, [handleDetailComments]);

  return { detailComments, nextCursor };
};

export default useFetchDetailComments;
