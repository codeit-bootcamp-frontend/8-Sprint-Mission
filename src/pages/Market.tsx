import Header from 'components/@shared/Header';
import ProductList from 'components/market/ProductList';

import styled from 'styled-components';

function Market() {
  return (
    <div>
      <Header />
      <MarketContainer>
        <ProductList />
      </MarketContainer>
    </div>
  );
}
export default Market;

const MarketContainer = styled.main`
  width: 120rem;
  height: 100%;
  margin: 0 auto;
  padding-top: var(--header-heigt);
`;
