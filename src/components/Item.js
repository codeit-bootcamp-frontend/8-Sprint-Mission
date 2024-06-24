import emptyHeart from "../assets/ic_empty_heart.png";
import defaultImage from "../assets/img_default.png";

function Item({ displays }) {
  return (
    <>
      {displays.map((display) => {
        return (
          <div key={display.id}>
            <img
              className="product-image"
              src={display.images}
              alt={display.name}
              onError={(e) => {
                e.target.src = defaultImage;
              }}
            ></img>
            <div className="product-name">{display.name}</div>
            <div className="product-price">
              {display.price.toLocaleString("ko-KR")}원
            </div>
            <div className="product-favorit">
              <img
                className="empty-heart"
                src={emptyHeart}
                alt={"empty_heart"}
              ></img>
              <div className="favorite-count">{display.favoriteCount}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
