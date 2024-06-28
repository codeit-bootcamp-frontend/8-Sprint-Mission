import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api';
import './BestItem.css';

function BestItem() {
  const [itemList, setItemList] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProducts();
    setItemList(list);
  };

  const bestItemList = itemList
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 4);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <h1 className="section-title">베스트 상품</h1>
      <div className="best-item-wrap">
        {bestItemList.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default BestItem;
