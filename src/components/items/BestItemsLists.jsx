import styled from "styled-components";
import icHeart from "../../assets/images/ic_heart.svg";
import { Link } from "react-router-dom";

function BestItemsList({ items }) {
  return (
    <BestUl>
      {items.map((item) => {
        return (
          <Link className="item" to={`${item.id}`} key={item.id}>
            <li>
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
          </Link>
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
    .item {
      width: 50%;
      align-items: center;
    }
    .item:nth-child(n + 3) {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .item {
      width: 100%;
    }
    .item:nth-child(n + 2) {
      display: none;
    }
  }
`;

export default BestItemsList;
