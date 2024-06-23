import { Suspense } from 'react';
import BestProductList from './BestProductList';
import { StyledProductCategoryText } from 'styles/market/textStyle';

function BsetProductsSection() {
  return (
    <div>
      <StyledProductCategoryText>베스트 상품</StyledProductCategoryText>
      <Suspense fallback={<div>Loding...</div>}>
        <BestProductList />
      </Suspense>
    </div>
  );
}

export default BsetProductsSection;
