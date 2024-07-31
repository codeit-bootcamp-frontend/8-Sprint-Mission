import styled from 'styled-components';
import HeartIcon from './HeartIcon';
import './ItemCard.css';

function ItemCard({ item }) {
  return (
    <div className="card-wrap">
      <img src={item.images} alt={item.name} className="img-wrap" />
      <p className="item-name">{item.name}</p>
      <h2 className="item-price">{item.price.toLocaleString('ko-KR')}원</h2>
      <FavoriteCountWrap>
        <HeartIcon />
        {item.favoriteCount}
      </FavoriteCountWrap>
    </div>
  );
}

export default ItemCard;

const FavoriteCountWrap = styled.div`
  display: flex;
  align-items: center;

  & img {
    margin-right: 4px;
  }
`;
