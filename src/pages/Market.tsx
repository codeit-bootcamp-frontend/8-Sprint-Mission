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

  height: 100%;
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;

  padding: 0 2.4rem;
  padding-top: 2.4rem;
  @media (max-width: 768px) {
    padding: 0 1.6rem;
  }
`;
