import React from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "DTO/product";
import heartIcon from "../../assets/images/ic_heart.png";

const defaultImageUrl = "https://example.com/...";

const ItemContainer = ({ item }: { item: Product }) => {
  const navigate = useNavigate();

  const handleItemClick = (productId: number) => {
    navigate(`/Items/${productId}`);
  };

  const imageUrl =
    item.images && item.images.length > 0 ? item.images[0] : defaultImageUrl;

  return (
    <figure className="flex flex-col gap-4">
      <img
        src={imageUrl}
        alt={item.name}
        className={
          String(item.images) === defaultImageUrl
            ? "item-default-img"
            : "item-img"
        }
        onClick={() => handleItemClick(item.id)}
      />
      <div className="flex flex-col gap-[6px] text-gray-800">
        <h2 className="text-[0.8rem]" onClick={() => handleItemClick(item.id)}>
          {item.name}
        </h2>
        <h3 className="font-bold text-base">{item.price}원</h3>
        <div className="flex content-center text-xs font-medium gap-1 text-gray-600">
          <button
            className="w-4 h-4 bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${heartIcon})` }}
          />
          <div>{item.favoriteCount}</div>
        </div>
      </div>
    </figure>
  );
};

export default ItemContainer;
