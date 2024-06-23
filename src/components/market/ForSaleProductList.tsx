import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import { useState } from 'react';
import Pagination from 'components/@shared/Pagination';

export const PAGE_SIZE = '10'; // 한 페이지당 보여줄 상품 수

function ForSaleProductList() {
  const [currentPageCount, setCurrentPageCount] = useState('1'); // 현재 페이지 번호
  const { data } = useProductsQuery({ size: PAGE_SIZE, page: currentPageCount });
  const { list: productList = [], totalCount = 0 } = data || {}; // 상품 목록과 총 상품 수

  return (
    <StyledForSaleProductContainer>
      <StyledForSaleProductsSection>
        {productList.map(({ id, name, price, images, favoriteCount }) => (
          <Product key={id} name={name} images={images} price={price} favoriteCount={favoriteCount} />
        ))}
      </StyledForSaleProductsSection>
      <Pagination
        totalCount={totalCount}
        currentPageCount={currentPageCount}
        setCurrentPageCount={setCurrentPageCount}
      />
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
