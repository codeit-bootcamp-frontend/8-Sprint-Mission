import { Suspense } from 'react';
import BestProductList from './BestProductList';
import { StyledProductCategoryText } from 'styles/market/textStyles';

function BestProductsSection() {
  return (
    <section>
      <StyledProductCategoryText>베스트 상품</StyledProductCategoryText>
      <Suspense fallback={<div>Loading...</div>}>
        <BestProductList />
      </Suspense>
    </section>
  );
}

export default BestProductsSection;
