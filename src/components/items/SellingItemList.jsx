import styled from "styled-components";
import icHeart from "../../assets/images/ic_heart.svg";

function SellingItemList({ items }) {
  return (
    <SellingUl>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div className="items-container">
              <img className="item-img" src={item.images} />
              <p className="item-name">{item.name} 팝니다</p>
              <span className="item-price">{item.price}원</span>
              <span className="item-favorite">
                <img className="heart-img" src={icHeart} />
                {item.favoriteCount}
              </span>
            </div>
          </li>
        );
      })}
    </SellingUl>
  );
}

const SellingUl = styled.ul`
  display: flex;
  padding-top: 16px;
  justify-content: space-between;
  flex-wrap: wrap;

  .items-container {
    padding-bottom: 40px;
    display: inline-block;
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: center;
  }
  .item-img {
    display: inline-block;
    width: 221px;
    height: 221px;
    border-radius: 16px;
  }
  @media (max-width: 1199px) {
    li {
      width: 33%;
    }
    li:nth-child(n + 7) {
      display: none;
    }
  }
  @media (max-width: 767px) {
    li {
      width: 50%;
    }
    li:nth-child(n + 5) {
      display: none;
    }
    .item-img {
      width: 168px;
      height: 168px;
    }
  }
`;

export default SellingItemList;
