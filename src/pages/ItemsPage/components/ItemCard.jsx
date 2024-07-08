import React from "react";
import { ReactComponent as HeartIcon } from "@assets/icons/ic_heart.svg";
import default_image from "@assets/ItemsPage/alt_image.png";

function ItemCard({ item }) {
  const { images, name, price, favoriteCount } = item;

  const onErrorImg = (e) => {
    e.target.src = default_image;
  };

  return (
    <div className="itemCard">
      <a className="itemCard__imgBox" href="/" target="_blank">
        <img
          className="itemCard__img"
          src={images[0]}
          alt={name}
          onError={onErrorImg}
        />
      </a>
      <div className="itemCard__infoArea">
        <a className="itemCard__name" href="/">
          {name}
        </a>
        <span className="itemCard__price">
          <em>{price.toLocaleString()}</em>원
        </span>
        <div className="itemCard__favoriteCount">
          <HeartIcon />
          <span>{favoriteCount.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
