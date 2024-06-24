import styled from "styled-components";
import icHeart from "../../assets/images/ic_heart.svg";

function BestItemsList({ items }) {
  return (
    <BestUl>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div className="item-container">
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
    </BestUl>
  );
}
const BestUl = styled.ul`
  display: flex;
  padding-top: 16px;
  justify-content: space-between;
  .item-container {
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: center;
    gap: 4px;
  }
  .item-img {
    display: inline-block;
    width: 282px;
    height: 282px;
    border-radius: 16px;
  }
  @media (max-width: 1199px) {
    li {
      width: 50%;
      align-items: center;
    }
    li:nth-child(n + 3) {
      display: none;
    }
  }
  @media (max-width: 767px) {
    li {
      width: 100%;
    }
    li:nth-child(n + 2) {
      display: none;
    }
  }
`;

export default BestItemsList;
