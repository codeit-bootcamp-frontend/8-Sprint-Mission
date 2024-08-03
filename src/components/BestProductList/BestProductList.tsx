import { useEffect, useState } from "react";
import { getProducts } from "../../api";
import { useNavigate } from "react-router-dom";
import "./BestProductList.css";

export interface Item {
  id?: number;
  images?: string;
  name?: string;
  price?: number;
  description?: string;
  tags?: string[];
  favoriteCount?: number;
}

interface ProductListItemProps {
  item: Item; // props를 정의하는 인터페이스 추가
}

function BestProductListItem({ item }: ProductListItemProps) {
  const navigate = useNavigate();
  const handleAddItemClick = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <button onClick={handleAddItemClick} className="BestProductListItem">
      <img
        className="BestProductListItem-img"
        src={item.images}
        alt={item.name}
      ></img>
      <p> {item.name}</p>
      <h3>{item.price}원</h3>
      <p>{item.favoriteCount}</p>
    </button>
  );
}

function BestProductList() {
  const [items, setItems] = useState<Item[]>([]);

  const handleLoad = async () => {
    const { list } = await getProducts({
      order: "favorite",
      page: 1,
      pageSize: 10,
    });
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const displayedItems = items.slice(0, 4);
  return (
    <div className="BestProductList">
      {displayedItems.map((item) => {
        return <BestProductListItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default BestProductList;
