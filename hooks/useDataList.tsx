import { useState } from 'react';
import { QueryType, CommentQueryType } from './types/useDataTypes';

type GetPostFn = (id: string | string[] | undefined) => Promise<any>;
type GetPostListFn = (query: QueryType) => Promise<any>;
type GetPostCommentFn = (
  query: CommentQueryType,
  id: string | string[] | undefined
) => Promise<any>;

type GetFn<T> = GetPostFn | GetPostListFn | GetPostCommentFn;

export default function useDataList<T>(
  getFn: GetFn<T>,
  initialList: T[] | T | null
) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dataList, setDataList] = useState<T[] | T | null>(initialList);
  const [totalItem, setTotalItem] = useState<number | null>();

  const fetchPost = async (params: any, id?: string | string[] | undefined) => {
    setLoading(true);
    try {
      const res = await getFn(params, id);
      console.log(res);
      if (res.list) {
        setDataList(res.list);
      } else {
        setDataList(res);
      }
      setTotalItem(res.totalCount);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('예기치 않은 오류가 발생했습니다.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    totalItem,
    dataList,
    fetchPost,
  };
}
