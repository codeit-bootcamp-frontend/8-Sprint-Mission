import React, { Suspense, useState } from 'react';
import ForSaleProductList from './ForSaleProductList';
import { StyledProductCategoryText } from 'styles/market/textStyle';
import styled from 'styled-components';
import ProductManagement from './ProductManagement';
import { ProductOrderBy } from 'types/productTypes';
import useToggle from 'hooks/useToggle';

function ForSaleProductsSection() {
  const [searchValue, setSearchValue] = useState('');
  const [orderBy, setOrderBy] = useState<ProductOrderBy>('recent');
  const [isOpen, toggleIsOpen] = useToggle();

  const handleOrderByClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { value } = (event.target as HTMLDivElement).dataset;

    if (value) {
      // dataset에 있는 데이터로 재정렬 요청 후 토글 닫기
      setOrderBy(value as ProductOrderBy);
      toggleIsOpen();
    }
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)['search'];
    setSearchValue(value);
  };

  const handleIsOpenClick = () => {
    toggleIsOpen();
  };

  return (
    <StyledForSaleProductsSection>
      <StyledForSaleProductSubHeader>
        <StyledProductCategoryText>판매 중인 상품</StyledProductCategoryText>
        <ProductManagement
          isOpenDropdown={isOpen}
          orderBy={orderBy}
          handleOrderByClick={handleOrderByClick}
          handleSearchSubmit={handleSearchSubmit}
          handleIsOpenClick={handleIsOpenClick}
        />
      </StyledForSaleProductSubHeader>

      <Suspense fallback={<div>Loding...</div>}>
        <ForSaleProductList keyword={searchValue} order={orderBy} />
      </Suspense>
    </StyledForSaleProductsSection>
  );
}

export default ForSaleProductsSection;

const StyledForSaleProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledForSaleProductSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
