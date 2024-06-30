import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '../../../API/itemApi';

const getPageSize = () => {
  const width = window.innerWidth;
  return width < 768 ? 1 : width < 1280 ? 2 : 4;
};

function BestItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData({ orderBy: 'favorite', pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pageSize]);

  return (
    <div className='bestItemsContainer'>
      <h1 className='sectionTitle'>베스트 상품</h1>

      <div className='bestItemsCardSection'>
        {itemList?.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default BestItemsSection;
