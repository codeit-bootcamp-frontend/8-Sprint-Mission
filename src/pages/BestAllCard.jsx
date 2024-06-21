//베스트 아이템 만들어야함
import React from 'react'
import { ReactComponent as HeartIcon } from '../images/icons/ic_heart.svg';

function BestAllCard({name, images, price, favoriteCount}) {
    return (
        <div className='Allcard-container'>
          <img src={images[0]} alt="card이미지" />
          <h2>{name}</h2>
          <h3>{price}원</h3>
          <HeartIcon/>
          <span>{favoriteCount}</span>
        </div>
    )

}

export default BestAllCard;

// 다가져오는게 아니라 베스트 상품 4개만 가져와야함
// favoriteCount가 높은순으로 베스트 상품 4개를 가져오자
