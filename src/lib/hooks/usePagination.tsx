"use client";
import { useState, useEffect } from "react";

export const usePagination = (
  filteredResults: any[],
  fetchedTotalCount: number,
  listLength: number
) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 페이지 수 업데이트 및 현재 페이지 조정
  useEffect(() => {
    if (filteredResults.length === 0) {
      setCurrentPage(1);
    }
  }, [filteredResults]);

  // 검색하지 않은 경우 fetchedTotalCount, 검색된 경우 filteredResults.length
  const totalCount =
    listLength === filteredResults.length
      ? fetchedTotalCount
      : filteredResults.length;

  return { currentPage, setCurrentPage, totalCount };
};
