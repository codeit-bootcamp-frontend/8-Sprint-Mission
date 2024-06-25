import usePageSize from 'hooks/usePageSize';
import React, { useState } from 'react';
import styled from 'styled-components';

interface PaginationProps {
  totalCount: number;
  currentPageCount: string;
  setCurrentPageCount: React.Dispatch<React.SetStateAction<string>>;
}

const MAX_PAGE_BUTTONS = '5'; // 화면에 최대 보여줄 페이지 버튼 수

function Pagination({ totalCount, currentPageCount, setCurrentPageCount }: PaginationProps) {
  const [startPageCount, setStartPageCount] = useState('1'); // 현재 페이지 그룹의 시작 페이지 번호
  const pageSize = usePageSize('forSale');

  console.log('pageSize:', pageSize);

  // 총 페이지 수를 계산한 최종 페이지 번호
  const lastPageCount = totalCount ? Math.ceil(totalCount / pageSize).toString() : '1';

  // 현재 페이지 그룹의 마지막 페이지 번호
  const endPageCount = Math.min(
    parseInt(startPageCount) + parseInt(MAX_PAGE_BUTTONS) - 1,
    parseInt(lastPageCount),
  ).toString();

  // 현재 페이지 그룹에 보여줄 페이지 번호 리스트 생성
  const pageCountList = Array.from({ length: parseInt(endPageCount) - parseInt(startPageCount) + 1 }, (_, i) =>
    (parseInt(startPageCount) + i).toString(),
  );

  const handlePageButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    const { value } = (event.target as HTMLElement).dataset;
    if (value === undefined) return;

    if (value === 'prevPage') {
      // 이전 페이지로 이동할 경우, 이전 페이지 그룹으로 넘어가야 하는 지 확인
      if (parseInt(currentPageCount) - 1 < parseInt(startPageCount)) {
        setStartPageCount((parseInt(startPageCount) - parseInt(MAX_PAGE_BUTTONS)).toString());
      }

      // 이전 페이지로 이동
      setCurrentPageCount(prevState => (parseInt(prevState) - 1).toString());
    } else if (value === 'nextPage') {
      // 다음 페이지로 이동할 경우, 다음 페이지 그룹으로 넘어가야 하는 지 확인
      if (parseInt(endPageCount) < parseInt(currentPageCount) + 1) {
        setStartPageCount((parseInt(endPageCount) + 1).toString());
      }
      // 다음 페이지로 이동
      setCurrentPageCount(prevState => (parseInt(prevState) + 1).toString());
    } else {
      // 선택한 페이지로 이동
      setCurrentPageCount(value);
    }
  };

  return (
    <StyledPagenationSection onClick={handlePageButtonClick}>
      <StyledPageButton data-value={'prevPage'} onClick={handlePageButtonClick} disabled={currentPageCount === '1'}>
        {'<'}
      </StyledPageButton>
      {pageCountList.map(count => (
        <StyledPageButton key={count} data-value={count} $isCurrentPageCount={currentPageCount === count}>
          {count}
        </StyledPageButton>
      ))}
      <StyledPageButton data-value={'nextPage'} disabled={currentPageCount === lastPageCount}>
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
