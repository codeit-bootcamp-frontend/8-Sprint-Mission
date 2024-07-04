import React from "react";
import { ReactComponent as HeartIcon } from "../../../images/icons/ic_heart.svg";

function ItemCard({ item }) {
  return (
    <div className="itemCard">
      <img src={item.images[0]} alt={item.name} className="itemCardThumbnail" />
      <div className="itemSummary">
        <h1 className="itemName">{item.name}</h1>
        <p className="itemPrice">{item.price}원</p>

        <div className="favoriteCount">
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
