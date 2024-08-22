"use client";
import { useState } from "react";

interface DataResponse {
  list: any[];
  totalCount: number;
}

export const useSearch = (
  data: DataResponse,
  setCurrentPage: (page: number) => void,
  getProperty: (item: any) => string
) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // 검색어 업데이트
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  // 검색어를 포함하는 데이터 필터링
  const filteredResults = searchTerm
    ? data.list.filter((property) => getProperty(property).includes(searchTerm))
    : data.list;

  // 전체 데이터로 돌아가는 함수
  const handleReset = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  return {
    searchTerm,
    handleSearch,
    handleReset,
    filteredResults,
  };
};
