import { useEffect, useState } from 'react';
import { getProducts } from '../../../api';
import ItemCard from './ItemCard';
import './OnSaleItem.css';

function OnSaleItem() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProducts();
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div className="on-sale-item-header">
        <h1>판매 중인 상품</h1>
        <input />
        <button>상품 등록하기</button>
        <select>
          <option>최신순</option>
          <option>좋아요순</option>
        </select>
      </div>
      <div className="on-sale-item-wrap">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default OnSaleItem;
