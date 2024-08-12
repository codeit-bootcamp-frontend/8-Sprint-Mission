import { useState } from "react";

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
  const [dataList, setDataList] = useState<T[]>(initialList);
  const fetchPost = async (query: queryType) => {
    try {
      const res = await getFn(query);
      console.log(res);
      setDataList(res);
    } catch (err) {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }
  };

  return {
    dataList,
    fetchPost,
  };
}
