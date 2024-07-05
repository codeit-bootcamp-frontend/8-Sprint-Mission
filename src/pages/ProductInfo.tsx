import Spacer from 'components/@shared/Spacer';
import InquirySection from 'components/productInfo/InquirySection';
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
      <Spacer topHeight={'3.2rem'} bottomHeight={'2.4rem'} needLine={true} />
      <Suspense fallback={<div>Loading...</div>}>
        <InquirySection />
      </Suspense>
    </StyledProductInfoContainer>
  );
}
export default ProductInfo;

const StyledProductInfoContainer = styled.main`
  ${commonContainerStyle};
`;
