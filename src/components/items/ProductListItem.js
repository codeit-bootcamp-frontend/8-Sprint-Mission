import { Link } from "react-router-dom";

import "./ProductListItem.css";
import likeIcon from "../../assets/images/ic_heart_empty.png";

function ProductListItem({ item, className }) {
  const { id, name, price, image, favoriteCount } = item;
  const classNames = `image ${className}`;

  return (
    <Link className="product-detail-link" to={`/items/${id}`}>
      <div className="product-list-item">
        <img className={classNames} src={image} alt={name}></img>
        <div className="title">{name}</div>
        <div className="price">{price}원</div>
        <div className="like">
          <img className="like-icon" src={likeIcon} alt="좋아요 아이콘"></img>
          <div className="like-num">{favoriteCount}</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductListItem;
