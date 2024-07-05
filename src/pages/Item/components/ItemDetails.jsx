import React, { useState } from "react";

function ItemDetails({ product }) {
  const { favoriteCount, images, tags, price, description, name } = product;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <section className="item-details-wrap">
      <img className="item-img" src={images[0]} alt="상품 이미지" />
      <div className="item-details">
        <div className="item-details-header">
          <div className="title">{name}</div>
          <div className="price">
            <div className="price">{price.toLocaleString()}원</div>
          </div>
        </div>
        <div className="item-details-body">
          <label>상품소개</label>
          <p>{description}</p>
          <label>상품태그</label>
          <div className="tag-list">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <button
          className={`favorite-button ${isFavorite ? "on" : ""}`}
          onClick={toggleFavorite}
        >
          <i className="ic_heart"></i>
          {favoriteCount}
        </button>
      </div>
    </section>
  );
}

export default ItemDetails;
