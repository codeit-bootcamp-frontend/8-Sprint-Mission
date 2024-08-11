import { useState } from 'react';
import { useGetAllBoards } from '@/features/boards';
import { BoardDropdownContentType } from '@/shared/config';

interface FetchBoardsParams {
  dropdownValue: BoardDropdownContentType;
  keyword: string;
}

export const useFetchBoards = ({
  dropdownValue,
  keyword,
}: FetchBoardsParams) => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const { data } = useGetAllBoards({
    orderBy: dropdownValue === '좋아요순' ? 'like' : 'recent',
    page: pageIndex,
    pageSize,
    keyword,
  });
  console.log(data);
  return { boardItemList: data?.list ?? [] };
};
