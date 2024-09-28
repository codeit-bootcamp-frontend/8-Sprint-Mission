import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import Item from './Item';
import PaginationBar from './PaginationBar';
import IconSearch from '@assets/images/icons/ic_search.svg';
import IconSort from '@assets/images/icons/ic_sort.svg';
import UIButton from '@core/ui/buttons/UIButton/UIButton';
import { GetProductsProps } from '@type/product.types';
import { useProducts } from '@lib/queries/items.queries';
import Link from 'next/link';

interface Item {
  id: number;
}

const getPageSize = () => {
  if (typeof window === 'undefined') return 4; // 기본값 설정
  const width = window.innerWidth;
  if (width < 768) return 4;
  if (width < 1280) return 6;
  return 10;
};

function SellingItems() {
  const [order, setOrder] = useState<GetProductsProps['order']>('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [keyword, setKeyword] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const router = useRouter();

  const { data: products, error } = useProducts({
    order,
    page,
    pageSize,
    keyword,
  });

  const handlePageChange = (pageNumber: number) => setPage(pageNumber);
  const handleClickDropdown = () => setIsDropdownVisible(!isDropdownVisible);
  const handleClickDropdownItem = (newOrder: GetProductsProps['order']) => {
    setOrder(newOrder);
    setIsDropdownVisible(false);
  };

  const handleKeyupSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setKeyword((e.target as HTMLInputElement).value);
    }
  };

  const handleClickItem = (itemId: number) => {
    router.push(`/items/${itemId}`);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setPageSize(getPageSize());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [order, page, pageSize, keyword, setPageSize]);

  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <div className="max-w-[1200px] mx-auto my-[94px] px-4">
      <div className="flex justify-between pb-6">
        <h2 className="text-xl font-bold">판매 중인 상품</h2>
        <div className="flex items-center">
          <Link href="/addItems">
            <UIButton
              className="rounded-xl text-2xl min-w-[250px] ml-2 p-[9px_16px] items-center"
              type="box"
              buttonTagType="button"
              isSmallButton
            >
              상품 등록하기
            </UIButton>
          </Link>
          <div className="relative flex items-center bg-gray-100 rounded-xl p-2 mr-4">
            <Image src={IconSearch} alt="검색" width={24} height={24} />
            <input
              className="bg-transparent ml-2 outline-none"
              placeholder="검색할 상품을 입력해 주세요"
              onKeyUp={handleKeyupSearchInput}
            />
          </div>
          <div className="relative">
            <button
              className="flex items-center bg-white border border-gray-200 rounded-xl py-2 px-4"
              onClick={handleClickDropdown}
            >
              {order === 'recent' ? '최신순' : '좋아요순'}
              <Image
                src={IconSort}
                alt="정렬"
                width={24}
                height={24}
                className="ml-2"
              />
            </button>
            {isDropdownVisible && (
              <div className="absolute top-full mt-1 bg-white border border-gray-200 rounded-xl">
                <div
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleClickDropdownItem('recent')}
                >
                  최신순
                </div>
                <div
                  className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleClickDropdownItem('favorite')}
                >
                  좋아요순
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products?.list.map((item) => (
          <Item
            key={`selling-item-${item.id}`}
            item={item}
            handleClick={() => handleClickItem(item.id)}
          />
        ))}
      </div>
      <div className="mt-8">
        <PaginationBar
          totalPageNum={
            products ? Math.ceil(products.totalCount / pageSize) : 0
          }
          activePageNum={page}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default SellingItems;
