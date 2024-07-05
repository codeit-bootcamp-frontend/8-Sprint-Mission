import { Link } from "react-router-dom";

import "./ProductListItem.css";
import likeIcon from "../../assets/images/ic_heart_empty.png";
import errorImage from "../../assets/images/img_default.png";

const onErrorImg = (e) => {
  e.target.src = errorImage;
};

function ProductListItem({ item, className }) {
  const { id, name, price, image, favoriteCount } = item;
  const classNames = `image ${className}`;

  return (
    <div className="product-list-item">
      <Link className="product-detail-link" to={`/items/${id}`}>
        <img
          className={classNames}
          src={image}
          alt={name}
          onError={onErrorImg}
        ></img>
      </Link>
      <div className="title">{name}</div>
      <div className="price">{price}원</div>
      <div className="like">
        <img
          className="like-icon"
          src={likeIcon}
          alt="좋아요 아이콘"
          width="16px"
          height="16px"
        ></img>
        <div className="like-num">{favoriteCount}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
