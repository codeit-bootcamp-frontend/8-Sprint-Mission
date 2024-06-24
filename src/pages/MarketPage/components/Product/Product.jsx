import React from "react";
import { CiHeart } from "react-icons/ci";
import "./Product.css";
import defaultImg from "../../../../images/defaultImg.jpeg";

function Product({ product }) {
  const { images, name, price, favoriteCount } = product;

  const fileExtension = images[0].substring(
    images[0].length - 4,
    images[0].length
  );
  const isValidImageUrl = fileExtension === "jpeg" ? images[0] : defaultImg;

  return (
    <div className="product-box">
      <img src={isValidImageUrl} alt={name} className="product-img" />
      <div className="product-info">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}원</span>
        <div className="product-favorite-count">
          <CiHeart className="heart-icon" />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default Product;
