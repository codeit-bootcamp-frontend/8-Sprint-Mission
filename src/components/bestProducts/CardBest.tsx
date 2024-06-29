import "./card-best.css";
import HeartIcon from "../../core/assets/icons/heartIcon/inactive-small.svg";

interface CardBestProps {
  imgSrc: string;
  imgAlt: string;
  description: string;
  price: string;
  favoriteCount: number;
}

const CardBest = ({
  imgSrc,
  imgAlt,
  description,
  price,
  favoriteCount,
}: CardBestProps) => {
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
          <img src={HeartIcon} className="heartIcon" alt="좋아요 아이콘" />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
};

export default CardBest;
