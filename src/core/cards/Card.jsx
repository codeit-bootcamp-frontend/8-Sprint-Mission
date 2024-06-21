import "./card.css";

const Card = ({ imgSrc, imgAlt, description, price, favoriteCount }) => {
  return (
    <div>
      <div className="img-wrap">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <p>{description}</p>
      <p>{price}원</p>
      <p>
        <i className="heartIcon"></i>
        {favoriteCount}
      </p>
    </div>
  );
};

export default Card;
