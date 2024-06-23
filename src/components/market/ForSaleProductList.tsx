import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import React, { useState } from 'react';

const PAGE_SIZE = '10'; // 한 페이지당 보여줄 상품 수
const MAX_PAGE_BUTTONS = '5'; // 화면에 최대 보여줄 페이지 버튼 수

function ForSaleProductList() {
  const [currentPageNum, setCurrentPageNum] = useState('1'); // 현재 페이지 번호
  const { data } = useProductsQuery({ size: PAGE_SIZE, page: currentPageNum });
  const { list: productList = [], totalCount = 0 } = data || {}; // 상품 목록과 총 상품 수
  const [startPageCount, setStartPageCount] = useState('1'); // 현재 페이지 그룹의 시작 페이지 번호

  // 총 페이지 수 계산
  const lastPageCount = totalCount ? Math.ceil(totalCount / parseInt(PAGE_SIZE)).toString() : '1';

  // 현재 페이지 그룹의 마지막 페이지 번호 계산
  const endPageCount = Math.min(
    parseInt(startPageCount) + parseInt(MAX_PAGE_BUTTONS) - 1,
    parseInt(lastPageCount),
  ).toString();

  // 현재 페이지 그룹에 보여줄 페이지 번호 리스트 생성
  const pageCountList = Array.from({ length: parseInt(endPageCount) - parseInt(startPageCount) + 1 }, (_, i) =>
    (parseInt(startPageCount) + i).toString(),
  );

  const handlePageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    if (value === 'prevPage') {
      // 이전 페이지 그룹으로 이동
      setStartPageCount(prevState => Math.max(parseInt(prevState) - parseInt(MAX_PAGE_BUTTONS), 1).toString());
      // 이전 페이지로 이동
      setCurrentPageNum(prevState => (parseInt(prevState) - 1).toString());
    } else if (value === 'nextPage') {
      // 다음 페이지 그룹으로 이동
      setStartPageCount(prevState =>
        Math.min(parseInt(prevState) + parseInt(MAX_PAGE_BUTTONS), parseInt(lastPageCount)).toString(),
      );
      // 다음 페이지로 이동
      setCurrentPageNum(prevState => (parseInt(prevState) + 1).toString());
    } else {
      // 선택한 페이지로 이동
      setCurrentPageNum(value);
    }
  };

  return (
    <StyledForSaleProductContainer>
      {/* 상품 목록 */}
      <StyledForSaleProductsSection>
        {productList.map(({ id, name, price, images, favoriteCount }) => (
          <Product key={id} name={name} images={images} price={price} favoriteCount={favoriteCount} />
        ))}
      </StyledForSaleProductsSection>

      {/* 페이지네이션 */}
      <StyledPagenationSection>
        <StyledPageButton value={'prevPage'} onClick={handlePageButtonClick} disabled={currentPageNum === '1'}>
          {'<'}
        </StyledPageButton>
        {pageCountList.map(count => (
          <StyledPageButton
            key={count}
            value={count}
            onClick={handlePageButtonClick}
            $isCurrentPageCount={currentPageNum === count}>
            {count}
          </StyledPageButton>
        ))}
        <StyledPageButton
          value={'nextPage'}
          onClick={handlePageButtonClick}
          disabled={currentPageNum === lastPageCount}>
          {'>'}
        </StyledPageButton>
      </StyledPagenationSection>
    </StyledForSaleProductContainer>
  );
}

export default ForSaleProductList;

const StyledForSaleProductContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const StyledForSaleProductsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: flex-end;
  column-gap: 2.4rem;
  row-gap: 4rem;

  & .product-image-wrapper {
    height: 22.1rem;
    width: 22.1rem;
  }
`;

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
