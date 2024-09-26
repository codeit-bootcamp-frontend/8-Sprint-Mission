import { useState } from "react";
import Image from "next/image";

import errorImage from "../../assets/images/img_default.png";
import kebabIcon from "../../assets/images/ic_kebab.png";
import likeIconEmpty from "../../assets/images/ic_heart_empty.png";
import likeIconFull from "../../assets/images/ic_heart_full.png";

import Tag from "@/components/Tag";
import { ProductTypes } from "@/types/product";

interface ProductDetailContentProps {
  product: ProductTypes;
}

function ProductDetailContent({ product }: ProductDetailContentProps) {
  const {
    id,
    name,
    description,
    price,
    images,
    favoriteCount,
    tags = [],
  } = product;

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="contents-wrapper">
      <Image src={images[0]} alt={name} width={486} height={486} />
      <div className="contents">
        <div className="text">
          <div className="title-wrapper">
            <div className="title">{name}</div>
            <Image
              src={kebabIcon}
              alt="케밥 메뉴 아이콘"
              width={24}
              height={24}
            />
          </div>
          <div className="price">{price}원</div>

          <div className="description-wrapper">
            <div className="contents-label">상품 소개</div>
            <div className="description">{description}</div>
            <div className="contents-label">상품 태그</div>
            <ul className="tags">
              {tags.length > 0 &&
                tags.map((tag: string) => {
                  return (
                    <li key={id} className="tag">
                      <Tag tag={tag} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <button className="like-button" onClick={handleButtonClick}>
          <Image
            className="like-icon"
            src={isButtonClicked ? likeIconFull : likeIconEmpty}
            alt="좋아요 아이콘"
            width={32}
            height={32}
          />
          <div className="like-num">{favoriteCount}</div>
        </button>
      </div>
    </div>
  );
}

export default ProductDetailContent;
