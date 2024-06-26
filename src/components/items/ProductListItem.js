import "./ProductListItem.css";
import likeIcon from "../../assets/images/ic_heart_empty.png";

function ProductListItem({ item, className }) {
  const { title, price, image, favoriteCount } = item;
  const classNames = `image ${className}`;

  return (
    <div className="product-list-item">
      <img className={classNames} src={image} alt={title}></img>
      <div className="title">{title}</div>
      <div className="price">{price}원</div>
      <div className="like">
        <img className="like-icon" src={likeIcon} alt="좋아요 아이콘"></img>
        <div className="like-num">{favoriteCount}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
