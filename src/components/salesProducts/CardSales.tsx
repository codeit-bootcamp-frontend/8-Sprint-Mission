import "./card-sales.css";
import HeartIcon from "../../core/assets/icons/heartIcon/inactive-small.svg";

interface CardSalesProps {
  imgSrc: string;
  imgAlt: string;
  description: string;
  price: string;
  favoriteCount: number;
}

const CardSales = ({
  imgSrc,
  imgAlt,
  description,
  price,
  favoriteCount,
}: CardSalesProps) => {
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={imgSrc} className="card-sales-img" alt={imgAlt} />
      </div>
      <div className="card-description">
        <div className="description-wrap">
          <p className="product-description">{description}</p>
          <p className="product-price">{price}원</p>
        </div>
        <div className="favorite-count">
          <img src={HeartIcon} className="heartIcon" alt={imgAlt} />
          {favoriteCount}
        </div>
      </div>
    </div>
  );
};

export default CardSales;
