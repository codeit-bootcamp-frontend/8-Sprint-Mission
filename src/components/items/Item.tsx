import React from 'react';
import Image from 'next/image';
import IconHeart from '@assets/images/icons/ic_heart.svg';
import ImgDefault from '@assets/images/image/img_default.png';

interface ItemProps {
  item: any;
  handleClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

function Item({ item, handleClick }: ItemProps) {
  const handleErrorImage = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = ImgDefault.src;
  };

  return (
    <div
      className="overflow-hidden cursor-pointer"
      onClick={handleClick}
      data-item-id={item.id}
    >
      <img
        src={item.images[0]}
        alt={item.name}
        className="w-full h-auto object-cover rounded-2xl overflow-hidden aspect-square mb-4"
        onError={handleErrorImage}
      />
      <div className="flex flex-col flex-grow leading-normal">
        <p className="text-base font-normal whitespace-nowrap overflow-hidden text-ellipsis">
          {item.name}
        </p>
        <p className="text-base font-bold">{item.price.toLocaleString()}원</p>
        <div className="flex items-center text-gray-500">
          <Image src={IconHeart} alt="하트 아이콘" width={16} height={16} />
          <span className="ml-1">{item.favoriteCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
