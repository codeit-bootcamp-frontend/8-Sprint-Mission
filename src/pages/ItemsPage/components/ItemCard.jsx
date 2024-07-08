import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from "@assets/icons/ic_heart.svg";
import default_image from "@assets/ItemsPage/alt_image.png";

function ItemCard({ item }) {
  const { images, name, price, favoriteCount } = item;

  const onErrorImg = (e) => {
    e.target.src = default_image;
  };

  return (
    <Link to={`${item.id}`} className="itemCard">
      <img
        className="itemCard__img"
        src={images[0]}
        alt={name}
        onError={onErrorImg}
      />
      <div className="itemCard__infoArea">
        <span className="itemCard__name">{name}</span>
        <span className="itemCard__price">
          <em>{price.toLocaleString()}</em>원
        </span>
        <div className="itemCard__favoriteCount">
          <HeartIcon />
          <span>{favoriteCount.toLocaleString()}</span>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
