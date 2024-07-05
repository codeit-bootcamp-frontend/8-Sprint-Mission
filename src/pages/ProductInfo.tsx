import ProductDetail from 'components/productInfo/ProductDetail';
import { Suspense } from 'react';
import styled from 'styled-components';
import { commonContainerStyle } from 'styles/@shared/shared';

function ProductInfo() {
  return (
    <StyledProductInfoContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail />
      </Suspense>
    </StyledProductInfoContainer>
  );
}
export default ProductInfo;

const StyledProductInfoContainer = styled.main`
  ${commonContainerStyle};
`;
