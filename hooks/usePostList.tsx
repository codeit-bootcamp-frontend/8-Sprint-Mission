import { useState } from 'react';

interface queryType {
  query: {
    orberBy?: string | string[] | undefined;
    pageSize?: string | number;
    keyword?: string;
  };
}

export default function usePostList<T>(
  getFn: (query: queryType) => Promise<T[]>,
  initialList: T[]
) {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dataList, setDataList] = useState<T[]>(initialList);
  const fetchPost = async (query: queryType) => {
    setLoading(true);
    try {
      const res = await getFn(query);
      setDataList(res);
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
    dataList,
    fetchPost,
  };
}
