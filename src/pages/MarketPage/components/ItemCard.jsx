import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

function ItemCard({ item }) {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <div className="itemCard" onClick={onClickCard}>
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
