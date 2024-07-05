import React from "react";
import { useNavigate } from "react-router-dom";

const defaultImageUrl = "https://example.com/...";

function ItemContainer({ item }) {
  const navigate = useNavigate();

  const handleItemClick = (productId) => {
    navigate(`/Items/${productId}`);
  };

  return (
    <div className="item-container">
      <img
        src={item.images}
        alt={item.name}
        className={
          String(item.images) === defaultImageUrl
            ? "item-default-img"
            : "item-img"
        }
        onClick={() => handleItemClick(item.id)}
      />
      <div className="item-content">
        <h2
          className="item-content-sub"
          onClick={() => handleItemClick(item.id)}
        >
          {item.name}
        </h2>
        <h3 className="item-price">{item.price}원</h3>
        <div className="item-favorite">
          <button className="btn-heart"></button>
          <div className="favorite-count">{item.favoriteCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;
