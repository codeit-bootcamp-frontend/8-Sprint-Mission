import "./card-best.css";
import HeartIcon from "../../core/assets/icons/heartIcon/inactive-small.svg";

const CardBest = ({ imgSrc, imgAlt, description, price, favoriteCount }) => {
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={imgSrc} className="card-best-img" alt={imgAlt} />
      </div>
      <div className="card-description">
        <div className="description-wrap">
          <p className="product-description">{description}</p>
          <p className="product-price">{price}원</p>
        </div>
        <div className="favorite-count">
          <img src={HeartIcon} className="heartIcon" />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
};

export default CardBest;
