import { Suspense } from 'react';
import ForSaleProductList from './ForSaleProductList';
import { StyledProductCategoryText } from 'styles/market/textStyle';

function ForSaleProductsSection() {
  return (
    <div>
      <StyledProductCategoryText>판매 중인 상품</StyledProductCategoryText>
      <Suspense fallback={<div>Loding...</div>}>
        <ForSaleProductList />
      </Suspense>
    </div>
  );
}

export default ForSaleProductsSection;
