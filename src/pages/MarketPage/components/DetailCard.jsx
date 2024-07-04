import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../../context/ItemContext";
import { ReactComponent as HeartIcon } from "../../../images/icons/ic_heart.svg";
import { ReactComponent as SeeMoreIcon } from "../../../images/icons/ic_seemore.svg";
function ProductDetail() {
  const { id } = useParams();
  const itemList = useContext(ItemContext);
  const item = itemList.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <img src={item.images} alt={item.name} />
      <h1>{item.name}</h1>
      <SeeMoreIcon />
      <h2>{item.price}</h2>
      <p>{item.description}</p>
      <p>{item.tags}</p>
      <HeartIcon />
      <p>{item.favoriteCount}</p>
    </div>
  );
}

export default ProductDetail;
