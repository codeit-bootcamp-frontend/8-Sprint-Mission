import usePageSize from 'hooks/usePageSize';
import React, { useState } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  setCurrentPageCount: React.Dispatch<React.SetStateAction<number>>;
}

const MAX_PAGE_BUTTONS = 3; // 화면에 최대 보여줄 페이지 버튼 수

function Pagination({ totalCount, currentPage, setCurrentPageCount }: PaginationProps) {
  const pageSize = usePageSize('forSale');

  // 현재 페이지 그룹의 시작 페이지 번호
  const [startPage, setStartPage] = useState(1);

  // 총 페이지 수를 계산한 최종 페이지 번호
  const lastPage = totalCount ? Math.ceil(totalCount / pageSize) : 1;

  // 현재 페이지 그룹의 마지막 페이지 번호
  const endPage = Math.min(startPage + MAX_PAGE_BUTTONS - 1, lastPage);

  // 현재 페이지 그룹에 보여줄 페이지 번호 리스트 생성
  const pageCountList = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  const handlePageButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    const { value } = (event.target as HTMLElement).dataset;
    if (value === undefined) return;

    if (value === 'prevPage') {
      if (currentPage - 1 < startPage) {
        // 이전 페이지로 이동할 경우, 이전 페이지 그룹으로 넘어가야 하는 지 확인
        setStartPage(startPage - MAX_PAGE_BUTTONS);
      }
      setCurrentPageCount(prevState => Math.max(prevState - 1, 1)); // 이전 페이지로 이동
    } else if (value === 'nextPage') {
      if (endPage < currentPage + 1) {
        // 다음 페이지로 이동할 경우, 다음 페이지 그룹으로 넘어가야 하는 지 확인
        setStartPage(endPage + 1);
      }
      setCurrentPageCount(prevState => Math.min(prevState + 1, lastPage)); // 다음 페이지로 이동
    } else {
      setCurrentPageCount(parseInt(value)); // 선택한 페이지로 이동
    }
  };

  return (
    <StyledPagenationSection onClick={handlePageButtonClick}>
      <StyledPageButton data-value={'prevPage'} disabled={currentPage === 1}>
        {'<'}
      </StyledPageButton>
      {pageCountList.map(count => (
        <StyledPageButton key={count} data-value={count} $isCurrentPageCount={currentPage === count}>
          {count}
        </StyledPageButton>
      ))}
      <StyledPageButton data-value={'nextPage'} disabled={currentPage === lastPage}>
        {'>'}
      </StyledPageButton>
    </StyledPagenationSection>
  );
}

export default Pagination;

const StyledPagenationSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 11.3rem;
  gap: 1.25rem;
`;

const StyledPageButton = styled.button<{ $isCurrentPageCount?: boolean }>`
  background-color: ${({ $isCurrentPageCount }) => ($isCurrentPageCount ? 'var(--brand-blue)' : 'var(--white)')};
  color: ${({ $isCurrentPageCount }) => $isCurrentPageCount && 'var(--white)'};
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  border: 1px solid var(--border-gray);
`;
