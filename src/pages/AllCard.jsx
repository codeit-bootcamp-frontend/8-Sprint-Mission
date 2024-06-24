import React from 'react'
import { ReactComponent as HeartIcon } from '../images/icons/ic_heart.svg';


function Allcard({name, images, price, favoriteCount}) {
    return (
        <div className='Allcard-container'>
            <img src={images} alt="card이미지" />
            <h2>{name}</h2>
            <h3>{price}원</h3>
            <HeartIcon/>
            <span>{favoriteCount}</span>
        </div>
    )

}

export default Allcard;