import { Link } from "react-router-dom";
import likeIcon from "../../images/heart_inactive.png";
import "./ProductListItem.css";

function ProductListItem({ item }) {
  return (
    <div className="product-list-item container">
      <Link to={`/market/${item.id}`}>
        <img
          className="product-list-item product-list-item-img"
          src={item.images[0]}
          alt={item.name}
        ></img>
        <div className="product-list-item product-list-item-name">
          {item.name}
        </div>
        <div className="product-list-item product-list-item-price">
          {item.price}원
        </div>
        <div className="product-list-item like-section">
          <img className="like-icon" src={likeIcon} alt="좋아요 아이콘"></img>
          <div className="like-count">{item.favoriteCount}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProductListItem;
