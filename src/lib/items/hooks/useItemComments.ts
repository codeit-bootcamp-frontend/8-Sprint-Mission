import { useEffect, useState } from 'react';
import { getCommentsByProductId } from '../../../pages/api/Items';

interface useItemCommentsProps {
  productId: number;
  limit: number;
  cursor: string;
  deps: any[];
}

/**
 *
 * @param {number} productId
 * @param {array} deps
 * @returns [imgSrc, title, price, desc, tags, favoriteCount]
 */
export function useItemComments({
  productId = 0,
  limit = 1,
  cursor,
  deps = [],
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
  }, deps);

  return { comments, nextCursor };
}
