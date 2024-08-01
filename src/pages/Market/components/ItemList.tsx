import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/ic_heart.svg";
import "./AllItems.css";
import "../../../style/global.css";
import { Link } from "react-router-dom";
import { Product } from "../../../type/ProductType";

interface ProductProps {
  product: Product;
}

function ItemList({ product }: ProductProps) {
  const { images, name, price, favoriteCount, createdAt } = product;
  function formatDate(value: number) {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  }

  return (
    <Link to={`/items/${product.id}`} className="productContent">
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
    </Link>
  );
}

export default ItemList;
