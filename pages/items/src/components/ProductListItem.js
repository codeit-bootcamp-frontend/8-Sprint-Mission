import likeIcon from "../images/heart_inactive.png";

function ProductListItem({ item }) {
  return (
    <div>
      <img src={item.images[0]} alt={item.name}></img>
      <div>{item.name}</div>
      <div>{item.price}원</div>
      <div>
        <img src={likeIcon} alt="좋아요 아이콘"></img>
        <div>{item.favoriteCount}</div>
      </div>
    </div>
  );
}

export default ProductListItem;
