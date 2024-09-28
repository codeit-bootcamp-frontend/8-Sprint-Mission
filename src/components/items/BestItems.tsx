import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Item from './Item';
import { GetProductsProps, Product } from '@type/product.types';
import { getProducts } from '@lib/api/items.api';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};

function BestItems() {
  // 상품 목록
  const [itemList, setItemList] = useState<Product[]>([]);
  // 쿼리
  const [order, setOrder] = useState<GetProductsProps['order']>('favorite');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [keyword, setKeyword] = useState('');
  // 에러
  const [fetchingError, setfetchingError] = useState<Error | null>(null);
  const router = useRouter();

  const fetchItemList = async () => {
    try {
      setfetchingError(null);
      const products = await getProducts({ order, page, pageSize, keyword });
      setItemList(products.list);
    } catch (err) {
      setItemList([]);
      setfetchingError(err as Error);
    }
  };

  const handleResize = () => {
    setPageSize(getPageSize());
  };

  const handleClickItem = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    router.push(`/items/${e.currentTarget.dataset.itemId}`);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    fetchItemList();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [order, page, pageSize, keyword]);

  return (
    <>
      <div className="max-w-[1200px] mx-auto my-[94px] px-4 pb-10">
        <h2 className="text-xl font-bold mb-6">베스트 상품</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {fetchingError && fetchingError.message}
          {itemList?.map((item) => (
            <Item
              item={item}
              key={`best-item-${item.id}`}
              handleClick={handleClickItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BestItems;
