import { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import { getProducts } from '@/api/itemApi';
import { Product, ProductSortOption } from '@/types/product';

const getPageSize = () => {
  const width = window.innerWidth;
  const TABLET = 768;
  const PC = 1280;

  return width < TABLET ? 1 : width < PC ? 2 : 4;
};

function BestItemsSection() {
  const [itemList, setItemList] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async (orderBy: ProductSortOption, pageSize: number) => {
    const products: {
      totalCount: number;
      list: Product[];
    } = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData('favorite', pageSize);

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
