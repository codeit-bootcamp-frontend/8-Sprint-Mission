import React from 'react';
import { useState } from 'react';
import ImgDefault from '../../../assets/img/img-default.png';

function ProductInfo({ product }) {
  const { images, name, price, description, tags, favoriteCount } = product;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  };
  const ImgError = event => {
    event.target.src = ImgDefault;
  };

  return (
    <section className="product-info-wrap">
      <div className="product-img">
        <img src={images?.[0] ?? ImgDefault} alt={name} onError={ImgError} />
      </div>
      <div className="product-info">
        <div className="product-info-header">
          <div className="title">{name}</div>
          <div className="price">
            {' '}
            <div className="price">{price.toLocaleString()}원</div>원
          </div>
        </div>
        <div className="product-info-body">
          <label>상품소개</label>
          <p>{description}</p>
          <label>상품태그</label>
          <div className="tag-list">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <button className={`btn-favorite ${isFavorite ? 'on' : ''}`} onClick={toggleFavorite}>
          <i className="icon ic_heart"></i>
          {favoriteCount}
        </button>
      </div>
    </section>
  );
}

export default ProductInfo;
