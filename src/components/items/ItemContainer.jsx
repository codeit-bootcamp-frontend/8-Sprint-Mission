import React from "react";

function ItemContainer({ item }) {
  return (
    <div className="item-container">
      <img src={item.images} alt={item.name} className="item-img" />
      <div className="item-content">
        <h2 className="item-content-sub">{item.name}</h2>
        <h3 className="item-price">{item.price}원</h3>
        <div className="item-favorite">
          <button className="favorite-count-btn"></button>
          <div className="favorite-count">{item.favoriteCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;
