import "../styles/components/ProductCard.css";

import ic_heart_url from "../assets/ic_heart_inactive.png";

/**
 * HTML productcard element를 return
 * @param {object} product - api에서 받아온 product
 * @returns {element} - product정보를 담은 card 형태의 html element
 */
function ProductCard({ product }) {
  const { favoriteCount, id, images, name, price } = product;
  return (
    <div className="product-card" key={id}>
      <div
        className="product-img"
        style={{ backgroundImage: `url(${images})` }}
      />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">{price.toLocaleString("ko-KR")}원</div>
        <div className="favorite-count-container">
          <img className="heart-img" src={ic_heart_url} alt="좋아요 아이콘" />
          <div className="product-favorite-count">{favoriteCount}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
