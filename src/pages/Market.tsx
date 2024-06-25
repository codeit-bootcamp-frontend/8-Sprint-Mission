import Header from 'components/@shared/Header';
import BsetProductsSection from 'components/market/BestProductsSection';
import ForSaleProductsSection from 'components/market/ForSaleProductSection';
import styled from 'styled-components';

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

  width: 100%;
  padding: 0 2.4rem;
  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
  padding-top: calc(var(--header-heigt) + 2.4rem);
`;
