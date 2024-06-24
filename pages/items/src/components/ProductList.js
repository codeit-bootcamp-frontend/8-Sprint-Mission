import "./ProductList.css";
import grayHeart from "../images/heart_inactive.png";

function ProductListItem({ item }) {
  return (
    <div className="ProductListItem">
      <img
        className="ProductListItem-img"
        src={item.images}
        alt={item.name}
      ></img>
      <div>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
        <img
          className="ReviewListItem-like-icon"
          src={grayHeart}
          alt="회색 좋아요"
        ></img>
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}

function ProductList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.ownerId}>
            <ProductListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
