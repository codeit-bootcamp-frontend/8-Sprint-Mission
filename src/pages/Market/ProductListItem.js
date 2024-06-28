import likeIcon from "../images/heart_inactive.png";
import "./ProductListItem.css";

function ProductListItem({ item }) {
  return (
    <div className="ProductListItem container">
      <img
        className="ProductListItem ProductListItem-img"
        src={item.images[0]}
        alt={item.name}
      ></img>
      <div className="ProductListItem ProductListItem-name">{item.name}</div>
      <div className="ProductListItem ProductListItem-price">
        {item.price}원
      </div>
      <div className="ProductListItem like-section">
        <img className="like-icon" src={likeIcon} alt="좋아요 아이콘"></img>
        <div className="like-count">{item.favoriteCount}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
