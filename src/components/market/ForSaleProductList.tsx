import styled from 'styled-components';
import Product from './Product';
import useProductsQuery from 'queries/useProductsQuery';
import { useState } from 'react';
import Pagination from 'components/@shared/Pagination';
import usePageSize from 'hooks/usePageSize';

interface ForSaleProductListProps {
  order: string;
  keyword: string;
}

function ForSaleProductList({ order, keyword }: ForSaleProductListProps) {
  const [currentPageCount, setCurrentPageCount] = useState('1'); // 현재 페이지 번호
  const pageSize = usePageSize('forSale');
  const {
    data: { list: productList, totalCount },
  } = useProductsQuery({ size: pageSize, page: currentPageCount, order, keyword });

  console.log();

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
  grid-template-columns: repeat(5, 1fr);
  justify-items: start;
  column-gap: 2.4rem;
  row-gap: 4rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
