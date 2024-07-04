import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../api';
import './BestItem.css';

function BestItem() {
  const [itemList, setItemList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [orderBy, setOrderBy] = useState('favorite');

  const handleLoad = async (options) => {
    const { list } = await getProducts(options);
    setItemList(list);
  };

  useEffect(() => {
    handleLoad({ page, pageSize, orderBy });
  }, [page, pageSize, orderBy]);

  return (
    <div>
      <h1 className="best-section-title">베스트 상품</h1>
      <div className="best-item-wrap">
        {itemList.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default BestItem;
