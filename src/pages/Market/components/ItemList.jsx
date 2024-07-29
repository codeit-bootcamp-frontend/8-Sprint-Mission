import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/ic_heart.svg";
import "./AllItems.css";
import "../../../style/global.css";

function ItemList({ product }) {
  const { images, name, price, favoriteCount, createdAt } = product;
  function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <div className="productContent">
      <img className="productImage" src={images[0]} alt={name} />
      <div className="productText">
        <h2 className="productName">{name}</h2>
        <p className="productPrice">{price.toLocaleString()}원</p>
        <div className="favoriteCount">
          <HeartIcon />
          {favoriteCount}
        </div>
        <p className="createdAt">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}

export default ItemList;
