import HeartIcon from './HeartIcon';
import './ItemCard.css';

function ItemCard({ item }) {
  return (
    <div className="card-wrap">
      <img src={item.images} alt={item.name} className="img-wrap" />
      <p>{item.name}</p>
      <h2>{item.price}</h2>
      <div>
        <HeartIcon />
        {item.favoriteCount}
      </div>
    </div>
  );
}

export default ItemCard;
