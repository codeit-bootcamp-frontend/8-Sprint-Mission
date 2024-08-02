import "./ProductList.css";
import { useNavigate } from "react-router-dom";

export interface Item {
  id?: number;
  images?: string;
  name?: string;
  price?: number;
  description?: string;
  tags?: string[];
  favoriteCount?: number;
}

export interface ProductListProps {
  items: Item[];
}

interface ProductListItemProps {
  item: Item; // props를 정의하는 인터페이스 추가
}

function ProductListItem({ item }: ProductListItemProps) {
  const navigate = useNavigate();
  const handleAddItemClick = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <button onClick={handleAddItemClick} className="ProductListItem">
      <img
        className="ProductListItem-img"
        src={item.images}
        alt={item.name}
      ></img>
      <p> {item.name}</p>
      <h3>{item.price}원</h3>
      <p>{item.favoriteCount}</p>
    </button>
  );
}

function ProductList({ items }: ProductListProps) {
  return (
    <div className="ProductList">
      {items.map((item) => {
        return <ProductListItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ProductList;
