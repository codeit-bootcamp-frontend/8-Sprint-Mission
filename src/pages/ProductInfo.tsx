import Spacer from 'components/@shared/Spacer';
import CommentsSection from 'components/productInfo/CommentsSection';
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
      <Spacer $topHeight={'3.2rem'} $bottomHeight={'2.4rem'} $needLine={true} />
      <CommentsSection />
    </StyledProductInfoContainer>
  );
}
export default ProductInfo;

const StyledProductInfoContainer = styled.main`
  ${commonContainerStyle};
`;
