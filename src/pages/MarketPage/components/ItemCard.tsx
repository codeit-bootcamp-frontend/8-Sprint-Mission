import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

interface ItemProps {
  item: {
    images: string[];
    name: string;
    price: number;
    favoriteCount: number;
  };
}

function ItemCard({ item }: ItemProps) {
  return (
    <div className="itemCard">
      <img src={item.images[0]} alt={item.name} className="itemCardThumbnail" />
      <div className="itemSummary">
        <h2 className="itemName">{item.name}</h2>
        <p className="itemPrice">{item.price.toLocaleString()}원</p>
        <div className="favoriteCount">
          <HeartIcon />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
