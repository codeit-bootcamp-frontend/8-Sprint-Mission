import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/ItemsPage/ic_heart.svg";

function ItemCard({ item }) {
  const { images, name, price, favoriteCount } = item;

  return (
    <div className="itemCard">
      <a className="itemCard__imgBox" href="/" target="_blank">
        <img className="itemCard__img" src={images} alt={name} />
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
