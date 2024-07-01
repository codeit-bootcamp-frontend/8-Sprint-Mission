import { PageRequestQuery, PageResponseType } from "custom.t";
import React from "react";

export const PAGENATION_SIZE: Readonly<number> = 5;

function usePageRequestHook(query: PageRequestQuery) {
  const [data, setData] = React.useState<PageResponseType | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const { page, pageSize, orderBy } = query as PageRequestQuery;
      const response = await fetch(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
      );
      const body = (await response.json()) as PageResponseType;
      const totalCount = body.totalCount;
      const totalPages = Math.ceil(totalCount / pageSize);
      const tmpEnd = Math.ceil(page / PAGENATION_SIZE) * PAGENATION_SIZE;
      const end = totalPages < tmpEnd ? totalPages : tmpEnd;
      const start = end < PAGENATION_SIZE ? 1 : end - 4;
      const prev = start > PAGENATION_SIZE;
      const next = totalCount > end * pageSize;
      const current = page > end ? end : page;
      const pageList: number[] = [];

      for (let i = 0, j = start; j <= end; i++, j++) {
        pageList[i] = j;
      }

      setData({
        ...body,
        info: {
          current,
          start,
          end,
          prev,
          next,
          pageList,
          totalPages,
        },
      });
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  React.useEffect(() => {
    fetchData();
  }, [query, fetchData]);

  return [data, isLoading] as [PageResponseType, boolean];
}

export default usePageRequestHook;
