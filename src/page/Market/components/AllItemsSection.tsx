import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';
import DropdownList from './layout/DropdownList';
import PaginationBar from './layout/PaginationBar';
import { ReactComponent as SortIcon } from '@/asset/svg/ic_sort.svg';
import { ReactComponent as SearchIcon } from '@/asset/svg/ic_search.svg';
import { getProducts } from '@/api/itemApi';
import { Product, ProductSortOption } from '@/types/product';

const getPageSize = () => {
  const width = window.innerWidth;
  const TABLET = 768;
  const PC = 1280;

  return width < TABLET ? 4 : width < PC ? 6 : 10;
};

export interface ProductListResponse {
  totalCount: number;
  list: Product[];
}

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState<ProductSortOption>('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState<Product[]>([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState(1);

  const fetchSortedData = async (orderBy: ProductSortOption, page: number, pageSize: number) => {
    const products: {
      totalCount: number;
      list: Product[];
    } = await getProducts({ orderBy, page, pageSize });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelection = (sortOption: ProductSortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData(orderBy, page, pageSize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onPageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div>
      <div className='allItemsSectionHeader'>
        <h1 className='sectionTitle'>판매 중인 상품</h1>
        <div className='searchBarWrapper'>
          <SearchIcon />
          <input className='searchBarInput' placeholder='검색할 상품을 입력해 주세요' />
        </div>
        <Link to='/additem' className='login button'>
          상품 등록하기
        </Link>
        <div className='sortButtonWrapper'>
          <button className='sortDropdownTriggerButton' onClick={toggleDropdown}>
            <SortIcon />
          </button>
          {isDropdownVisible && <DropdownList onSortSelection={handleSortSelection} />}
        </div>
      </div>

      <div className='allItemsCardSection'>
        {itemList?.map((item: any) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </div>

      <div className='paginationBarWrapper'>
        <PaginationBar totalPageNum={totalPageNum} activePageNum={page} onPageChange={onPageChange} />
      </div>
    </div>
  );
}

export default AllItemsSection;
