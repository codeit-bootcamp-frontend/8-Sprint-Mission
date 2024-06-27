import React from "react";

function ItemContainer({ item }) {
  return (
    <div className="item-container">
      <img src={item.images} alte={item.name} className="item-img"></img>
      <div className="item-content">
        <p className="item-content-sub">{item.name}</p>
        <p className="item-price">{item.price}원</p>
        <div className="item-favorite">
          <button className="favorite-count-btn"></button>
          <div className="favorite-count">{item.favoriteCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;
