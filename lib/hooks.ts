import { useCallback, useEffect, useState } from "react";
import { getBestPageSize, getTotalPageSize, initialProductsQueryKey } from "@/lib/utils";
import { ProductsQueryKey } from "@/lib/definitions";
import { debounce } from "lodash";

export function useProductsQueryKey(
  initPageSize: number,
  initOrderBy: string,
  eventType: "total" | "best",
) {
  const [state, setState] = useState<ProductsQueryKey>(
    initialProductsQueryKey(initPageSize, initOrderBy),
  );

  const updatePageSize = useCallback((pageSize: number) => {
    setState(prevState => {
      const newQuery = { ...prevState[1], pageSize };
      return [prevState[0], newQuery];
    });
  }, []);

  const updateOrderBy = useCallback((orderBy: string) => {
    setState(prevState => {
      const newQuery = { ...prevState[1], orderBy };
      return [prevState[0], newQuery];
    });
  }, []);

  const updateKeyword = useCallback((keyword: string) => {
    setState(prevState => {
      const newQuery = { ...prevState[1], keyword };
      return [prevState[0], newQuery];
    });
  }, []);

  const handleResize = useCallback(() => {
    const pageSize =
      eventType === "best" ? getBestPageSize(innerWidth) : getTotalPageSize(innerWidth);
    updatePageSize(pageSize);
  }, [eventType, updatePageSize]);

  useEffect(() => {
    const debouncedHandleResize = debounce(handleResize, 300);
    addEventListener("resize", debouncedHandleResize);
    return () => removeEventListener("resize", debouncedHandleResize);
  }, [handleResize]);

  return { queryKey: state, updateOrderBy, updateKeyword };
}
