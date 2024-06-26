import HeartIcon from './HeartIcon';

function ItemCard({ item }) {
  return (
    <div className="card-wrap">
      <img src={item.images} alt={item.name} />
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
