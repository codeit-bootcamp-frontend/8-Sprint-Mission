import { getCommentsByProductId } from '@lib/api/items.api';
import { useEffect, useState } from 'react';

interface useItemCommentsProps {
  productId: number;
  limit: number;
  cursor?: number;
}

/**
 *
 * @param {number} productId
 * @param {array} deps
 * @returns [imgSrc, title, price, desc, tags, favoriteCount]
 */
export function useItemComments({
  productId = -1,
  limit = 1,
  cursor,
}: useItemCommentsProps) {
  const [comments, setComments] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);

  const fetchData = async () => {
    try {
      const result = await getCommentsByProductId(productId, limit, cursor);
      setComments(result.list);
      setNextCursor(result.nextCursor);
    } catch (error) {
      // 디폴트 값
      setComments([]);
      setNextCursor(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, [productId, limit, cursor]);

  return { comments };
}
