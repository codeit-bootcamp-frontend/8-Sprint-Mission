import styled from "styled-components";

import BestItemsList from "./BestItemsLists";

function BestItems({ items }) {
  return (
    <BestItemsContainer>
      <span className="best-item-txt">베스트 상품</span>
      <BestItemsList items={items} />
    </BestItemsContainer>
  );
}

const BestItemsContainer = styled.section`
  width: 100%;
  .best-item-txt {
    font-weight: 700;
    font-size: 20px;
  }
`;

export default BestItems;
