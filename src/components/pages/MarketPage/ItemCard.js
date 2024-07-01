import HeartIcon from './HeartIcon';
import './ItemCard.css';

function ItemCard({ item }) {
  return (
    <div className="card-wrap">
      <img src={item.images} alt={item.name} className="img-wrap" />
      <p className="item-name">{item.name}</p>
      <h2 className="item-price">{item.price}원</h2>
      <div>
        <HeartIcon />
        {item.favoriteCount}
      </div>
    </div>
  );
}

export default ItemCard;
