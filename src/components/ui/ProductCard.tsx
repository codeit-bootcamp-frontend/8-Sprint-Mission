import React from "react";
import imgDefault from "../../assets/img/img-default.png";

// Product 타입 정의
interface Product {
  images?: string[]; // 이미지 URL 배열 (선택적)
  name: string; // 상품 이름
  price: number; // 상품 가격
  favoriteCount: number; // 좋아요 수
}

// Props 타입 정의
interface ProductCardProps {
  product?: Product; // 선택적 product prop
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return null;
  }

  // handleError 함수 타입 정의
  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = event.target as HTMLImageElement;
    target.src = imgDefault;
  };

  const { images, name, price, favoriteCount } = product;

  return (
    <div className="product-card">
      <div className="card-thumb-wrap">
        <img
          className="card-thumb"
          src={images?.[0] ?? imgDefault}
          alt={name}
          onError={handleError}
        />
      </div>
      <div className="card-info">
        <h4 className="card-title">{name}</h4>
        <p className="price">{price.toLocaleString()}원</p>
        <p className="like">
          <i className="icon-sm ic_heart"></i>
          <span className="num">{favoriteCount}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
