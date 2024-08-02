import { SyntheticEvent, useState } from "react";

import "./ProductDetailContent.css";
import errorImage from "../../assets/images/img_default.png";
import kebabIcon from "../../assets/images/ic_kebab.png";
import likeIconEmpty from "../../assets/images/ic_heart_empty.png";
import likeIconFull from "../../assets/images/ic_heart_full.png";

import Tag from "./Tag";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  favoriteCount: number;
  tags?: string[];
}

interface Props {
  product: Product;
}

const onErrorImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = errorImage;
};

function ProductDetailContent({ product }: Props) {
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
      <img
        className="image"
        src={images}
        alt={name}
        width="486px"
        height="486px"
        onError={onErrorImg}
      />
      <div className="contents">
        <div className="text">
          <div className="title-wrapper">
            <div className="title">{name}</div>
            <img
              src={kebabIcon}
              alt="케밥 메뉴 아이콘"
              width="24px"
              height="24px"
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
          <img
            className="like-icon"
            src={isButtonClicked ? likeIconFull : likeIconEmpty}
            alt="좋아요 아이콘"
            width="32px"
            height="32px"
          ></img>
          <div className="like-num">{favoriteCount}</div>
        </button>
      </div>
    </div>
  );
}

export default ProductDetailContent;
