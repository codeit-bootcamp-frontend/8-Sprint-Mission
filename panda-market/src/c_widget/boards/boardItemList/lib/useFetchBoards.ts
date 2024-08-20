import { useState } from 'react';
import { useGetAllBoards } from '@/d_features/boards';
import { BoardDropdownContentType } from '@/f_shared/config';

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
  return { boardItemList: data?.list ?? [] };
};
