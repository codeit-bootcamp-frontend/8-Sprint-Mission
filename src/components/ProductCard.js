import React from 'react';
import imgDefault from '../assets/img/img-default.png';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`
}

function ProductCard({ item }) {
  if (!item) {
    return null;
  }
  const handleError = (event) => {
    event.target.src = imgDefault;
  };
  const { images, name, price, favoriteCount, createdAt } = item;

  return (
    <div className="product-card">
      <div className='card-thumb-wrap'>
        <img className="card-thumb" src={images && images[0] ? images[0] : imgDefault} alt={name} onError={handleError} />
      </div>
      <div className="card-info">
        <h4 className="card-title">{name}</h4>
        <p className="price">{price.toLocaleString()}원</p>
        <p className="like">
          <i className="icon-sm ic_heart"></i>
          <span className="num">{favoriteCount}</span>
        </p>
        <p className="sr-only">{formatDate(createdAt)}</p>
      </div>
    </div>
  );
}
export default ProductCard;

