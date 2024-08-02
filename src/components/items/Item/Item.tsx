import React from 'react';
import { ReactComponent as IconHeart } from '../../../assets/images/icons/ic_heart.svg';
import ImgDefault from '../../../assets/images/market/img_default.png';

function Item({ item, handleClick = () => {} }) {
  const handleErrorImage = (e) => {
    e.target.src = ImgDefault;
  };

  return (
    <div className="wrapper-item" onClick={handleClick} data-item-id={item.id}>
      <img
        src={item.images[0]}
        alt={item.name}
        className="item-img"
        onError={handleErrorImage}
      />
      <div className="wrapper-item-info">
        <p className="item-name">{item.name}</p>
        <p className="item-price">{item.price.toLocaleString()}원</p>
        <div className="item-favorite-count">
          <IconHeart />
          {item.favoriteCount}
        </div>
      </div>
    </div>
  );
}

export default Item;
