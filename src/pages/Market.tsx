import Header from 'components/@shared/Header';
import ProductList from 'components/market/ProductList';
import { Suspense } from 'react';

import styled from 'styled-components';

function Market() {
  return (
    <div>
      <Header />
      <MarketContainer>
        <Suspense fallback={<div>Loding...</div>}>
          <ProductList />
        </Suspense>
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
