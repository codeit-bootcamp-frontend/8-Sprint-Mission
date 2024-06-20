import React from "react";

function ItemContainer({ item }) {
  return (
    <div className="item-container">
      <img className="item-img"></img>
      <div className="item-content">
        <p className="item-content-sub"></p>
        <p className="item-price"></p>
        <div className="item-favorite"></div>
      </div>
    </div>
  );
}

export default ItemContainer;
