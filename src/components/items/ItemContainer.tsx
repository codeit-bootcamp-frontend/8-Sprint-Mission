import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "DTO/product";
import { DEFAULT_ITEM_IMAGE } from "../../constants";
import LikeCount from "components/@shared/UI/LikeCount";

const ItemContainer = ({ item }: { item: Product }) => {
  const navigate = useNavigate();

  const handleItemClick = (productId: number) => {
    navigate(`/items/${productId}`);
  };

  const imageUrl = item.images ? item.images[0] : DEFAULT_ITEM_IMAGE;

  return (
    <figure className="flex flex-col gap-4">
      <img
        src={imageUrl}
        alt={item.name}
        className="object-cover cursor-pointer"
        onClick={() => handleItemClick(item.id)}
        width={221}
        height={221}
      />
      <div className="flex flex-col gap-[6px] text-gray-800">
        <h2
          className="text-[0.8rem] cursor-pointer"
          onClick={() => handleItemClick(item.id)}
        >
          {item.name}
        </h2>
        <h3 className="font-bold text-base">{item.price}원</h3>
        <LikeCount count={item.favoriteCount} />
      </div>
    </figure>
  );
};

export default ItemContainer;
