import { useEffect, useState } from 'react';
import { getProducts } from '../../../API/itemApi';
import ItemCard from './ItemCard';
import { ReactComponent as SortIcon } from '../../../images/icons/ic_sort.svg';
import { ReactComponent as SearchIcon } from '../../../images/icons/ic_search.svg';
import DropdownList from '../ui/DropdownList';
import PaginationBar from '../ui/PaginationBar';

const getPageSize = () => {
  const width = window.innerWidth;
  return width < 768 ? 4 : width < 1280 ? 6 : 10;
};

function AllItemsSection() {
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(getPageSize());
  const [itemList, setItemList] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [totalPageNum, setTotalPageNum] = useState();

  const fetchSortedData = async ({ orderBy, page, pageSize, keyword = 0 }) => {
    const products = await getProducts({ orderBy, page, pageSize, keyword });
    setItemList(products.list);
    setTotalPageNum(Math.ceil(products.totalCount / pageSize));
  };

  const handleSortSelection = (sortOption) => {
    setOrderBy(sortOption);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener('resize', handleResize);
    fetchSortedData({ orderBy, page, pageSize });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [orderBy, page, pageSize]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onPageChange = (pageNumber) => {
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
        <a href='/additem' className='login button'>
          상품 등록하기
        </a>
        <div className='sortButtonWrapper'>
          <button className='sortDropdownTriggerButton' onClick={toggleDropdown}>
            <SortIcon />
          </button>
          {isDropdownVisible && <DropdownList onSortSelection={handleSortSelection} />}
        </div>
      </div>

      <div className='allItemsCardSection'>
        {itemList?.map((item) => (
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
