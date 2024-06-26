import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api';
import './BestItem.css';

function BestItem() {
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
      <h1>베스트 상품</h1>
      <div className="best-item-wrap">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default BestItem;
