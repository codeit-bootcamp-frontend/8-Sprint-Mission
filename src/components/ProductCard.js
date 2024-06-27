import "../styles/components/ProductCard.css";

import heartIconUrl from "../assets/ic_heart_inactive.png";

function ProductCard() {
  return (
    <li className="product-card">
      <div
        className="product-img"
        // style={{ backgroundImage: `url(${images})` }}
        style={{ backgroundColor: "black", width: "100%" }}
      />
      <div className="product-details">
        <h3 className="product-name">아이패드 미니 팝니다</h3>
        <p className="product-price">500,000</p>
        <div className="favorite-count-container">
          <img className="heart-img" src={heartIconUrl} alt="좋아요 아이콘" />
          <div className="product-favorite-count">5</div>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
