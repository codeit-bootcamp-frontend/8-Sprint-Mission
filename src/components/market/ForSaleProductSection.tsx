import { Suspense } from 'react';
import ForSaleProductList from './ForSaleProductList';
import { StyledProductCategoryText } from 'styles/market/textStyle';
import styled from 'styled-components';

function ForSaleProductsSection() {
  return (
    <StyledForSaleProductsSection>
      <StyledProductCategoryText>판매 중인 상품</StyledProductCategoryText>
      <Suspense fallback={<div>Loding...</div>}>
        <ForSaleProductList />
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
