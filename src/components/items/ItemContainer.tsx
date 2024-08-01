import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "DTO/product";

const defaultImageUrl = "https://example.com/...";

const ItemContainer = ({ item }: { item: Product }) => {
  const navigate = useNavigate();

  const handleItemClick = (productId: number) => {
    navigate(`/Items/${productId}`);
  };

  const imageUrl =
    item.images && item.images.length > 0 ? item.images[0] : defaultImageUrl;

  return (
    <div className="item-container">
      <img
        src={imageUrl}
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
};

export default ItemContainer;
