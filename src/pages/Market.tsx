import Header from 'components/@shared/Header';
import BestProductList from 'components/market/BestProductList';

import { Suspense } from 'react';

import styled from 'styled-components';

function Market() {
  return (
    <div>
      <Header />
      <MarketContainer>
        <div>
          베스트 상품
          <Suspense fallback={<div>Loding...</div>}>
            <BestProductList />
          </Suspense>
        </div>
        <div>
          판매 중인 상품
          <Suspense fallback={<div>Loding...</div>}></Suspense>
        </div>
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
