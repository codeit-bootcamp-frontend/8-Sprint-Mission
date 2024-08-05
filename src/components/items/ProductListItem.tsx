import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

import "./ProductListItem.css";
import likeIcon from "../../assets/images/ic_heart_empty.png";
import errorImage from "../../assets/images/img_default.png";

interface Item {
  id: string;
  name: string;
  price: number;
  images: string;
  favoriteCount: number;
}

interface Props {
  item: Item;
  className: string;
}

const onErrorImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = errorImage;
};

function ProductListItem({ item, className }: Props) {
  const { id, name, price, images, favoriteCount } = item;
  const imageClassNames = `image ${className}`;

  return (
    <div className="product-list-item">
      <Link className="product-detail-link" to={`/items/${id}`}>
        <img
          className={imageClassNames}
          src={images}
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
