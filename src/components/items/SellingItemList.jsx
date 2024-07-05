import styled from "styled-components";
import icHeart from "../../assets/images/ic_heart.svg";
import { Link } from "react-router-dom";

function SellingItemList({ items }) {
  return (
    <SellingUl>
      {items.map((item) => {
        return (
          <Link className="item" to={`${item.id}`} key={item.id}>
            <li>
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
          </Link>
        );
      })}
    </SellingUl>
  );
}

const SellingUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-items: center;
  padding-top: 16px;

  .items-container {
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
  }
  .item {
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
    grid-template-columns: repeat(3, auto);

    .item:nth-child(n + 7) {
      display: none;
    }
    .item {
      width: 33%;
    }
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, auto);
    .item:nth-child(n + 5) {
      display: none;
    }

    .item {
      width: 50%;
    }

    .item-img {
      width: 168px;
      height: 168px;
    }
  }
`;

export default SellingItemList;
