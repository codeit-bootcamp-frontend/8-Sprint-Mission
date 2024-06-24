import styled from "styled-components";
import SellingItemsList from "./SellingItemList";
import SellingItemsSearch from "./SellingItemsSearch";

function SellingItems({ items, orderByHandle }) {
  return (
    <SellingItemsContainer>
      <div className="selling-top-container">
        <span className="selling-item-txt">판매중인 상품</span>
        <SellingItemsSearch orderByHandle={orderByHandle} />
      </div>
      <SellingItemsList items={items} />
    </SellingItemsContainer>
  );
}

const SellingItemsContainer = styled.section`
  width: 100%;
  margin-top: 40px;
  .selling-top-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .selling-item-txt {
    font-weight: 700;
    font-size: 20px;
  }
  @media (max-width: 765px) {
    .selling-top-container {
      padding-bottom: 50px;
    }
  }
`;
export default SellingItems;
