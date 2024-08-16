import { useState } from "react";
import { QueryType } from "./types/usePostListTypes";

export default function usePostList<T>(
  getFn: (query: QueryType) => Promise<{ list: T[]; totalCount: number }>,
  initialList: T[]
) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dataList, setDataList] = useState<T[]>(initialList);
  const [totalItem, setTotalItem] = useState<number | null>();

  const fetchPost = async (query: QueryType) => {
    setLoading(true);
    try {
      const res = await getFn(query);
      setDataList(res.list);
      setTotalItem(res.totalCount);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("예기치 않은 오류가 발생했습니다.");
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
