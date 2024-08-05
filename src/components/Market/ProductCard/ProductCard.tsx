import React from 'react';
import "./ProductCard.css";
import heartIconUrl from "../../../assets/images/ic_heart_inactive.png";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  images: string;
  name: string;
  price: number;
  favoriteCount: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { favoriteCount, images, name, price, id } = product;
  const itemUrl = `/items/${id}`;

  return (
    <Link to={itemUrl} style={{ textDecoration: "none" }}>
      <li className="product-card">
        <div
          className="product-img"
          style={{ backgroundImage: `url(${images})` }}
        />
        <div className="product-details">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">{price.toLocaleString("ko-KR")}원</p>
          <div className="favorite-count-container">
            <img className="heart-img" src={heartIconUrl} alt="좋아요 아이콘" />
            <div className="product-favorite-count">{favoriteCount}</div>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default ProductCard;
