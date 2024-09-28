import { useProducts } from '@lib/queries/items.queries';
import { useRouter } from 'next/router';
import Item from './Item';
import { GetProductsProps } from '@type/product.types';
import { useCallback, useEffect, useState } from 'react';

const getPageSize = () => {
  if (typeof window === 'undefined') return 4; // 기본값 설정
  const width = window.innerWidth;
  if (width < 768) return 1;
  if (width < 1280) return 2;
  return 4;
};

function BestItems() {
  const [order, setOrder] = useState<GetProductsProps['order']>('favorite');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4); // 초기값 설정
  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  const { data: products, error } = useProducts({
    order,
    page,
    pageSize,
    keyword,
  });

  const handleResize = useCallback(() => {
    setPageSize(getPageSize());
  }, []);

  const handleClickItem = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      router.push(`/items/${e.currentTarget.dataset.itemId}`);
    },
    [router]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageSize(getPageSize()); // 클라이언트 사이드에서만 호출
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [handleResize, order, page, pageSize, keyword]);

  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <div className="max-w-[1200px] mx-auto my-[94px] px-4 pb-10">
      <h2 className="text-xl font-bold mb-6">베스트 상품</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {products?.list.map((item) => (
          <Item
            item={item}
            key={`best-item-${item.id}`}
            handleClick={handleClickItem}
          />
        ))}
      </div>
    </div>
  );
}

export default BestItems;
