import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";

function ItemCard({images, name, price, favoriteCount}){
    return (
<div>
    <img src={images} alt="판매이미지" />
    <h2>{name}</h2>
    <h3>{price}</h3>
    <HeartIcon/> 
    <span>{favoriteCount}</span>
</div>
    ); 
}




export default ItemCard;