import Header from 'components/@shared/Header';
import BsetProductsSection from 'components/market/BestProductsSection';
import ForSaleProductsSection from 'components/market/ForSaleProductSection';
import styled from 'styled-components';
import { commonContainerStyle } from 'styles/@shared/shared';

function Market() {
  return (
    <div>
      <Header />
      <MarketContainer>
        <BsetProductsSection />
        <ForSaleProductsSection />
      </MarketContainer>
    </div>
  );
}
export default Market;

const MarketContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  ${commonContainerStyle}
`;
