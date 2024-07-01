import "../../styles/components/Items/ProductCard.css";

import heartIconUrl from "../../assets/ic_heart_inactive.png";

function ProductCard({ product }) {
  const { favoriteCount, images, name, price } = product;
  return (
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
  );
}

export default ProductCard;
