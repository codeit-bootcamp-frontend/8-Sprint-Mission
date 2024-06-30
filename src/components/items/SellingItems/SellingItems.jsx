import { ReactComponent as IconSearch } from '../../../assets/images/icons/ic_search.svg';
import { ReactComponent as IconSort } from '../../../assets/images/icons/ic_sort.svg';
import { useEffect, useState } from 'react';
import { getProducts } from '../../../pages/api/Items';
import Item from '../Item/Item';
import PaginationBar from '../PaginationBar/PaginationBar';
import './SellingItems.css';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4;
  } else if (width < 1280) {
    return 6;
  } else {
    return 10;
  }
};

function SellingItems() {
  // 상품
  const [itemList, setItemList] = useState([]);
  // 쿼리
  const [order, setOrder] = useState('recent');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [keyword, setKeyword] = useState('');
  // 검색
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // 페이지네이션
  const [totalPageNum, setTotalPageNum] = useState();
  // 에러
  const [fetchingError, setfetchingError] = useState(null);

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const handleClickDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleClickDropdownItem = (order) => {
    setOrder(order);
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleKeyupSearchInput = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      setKeyword(event.target.value);
    }
  };

  const fetchItemList = async ({ order, page, pageSize, keyword }) => {
    try {
      setfetchingError(null);
      const products = await getProducts({ order, page, pageSize, keyword });
      setItemList(products.list);
      setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    } catch (err) {
      setItemList([]);
      setTotalPageNum(0);
      setfetchingError(err);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener('resize', handleResize);
    fetchItemList({ order, page, pageSize, keyword });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [order, page, pageSize, keyword]);

  return (
    <>
      <div className="container-selling-items">
        {/* 판매 중인 상품 헤더 */}
        <div className="header-selling-items">
          <div className="header-selling-items-left">
            <div className="title-selling-items">판매 중인 상품</div>
          </div>
          <div className="header-selling-items-right">
            <a
              href="/items/additems"
              id="btn-add-item"
              className="button btn-add-item"
            >
              상품 등록하기
            </a>
            <div className="wrapper-input-search-item">
              <IconSearch />
              <input
                className="input-search-item"
                placeholder="검색할 상품을 입력해 주세요"
                onKeyUp={handleKeyupSearchInput}
              />
            </div>
            <div className="wrapper-sort-item">
              <button className="btn-sort-item" onClick={handleClickDropdown}>
                {order === 'recent' ? '최신순' : '좋아요순'}
                <IconSort />
              </button>
              {isDropdownVisible && (
                <div className="dropdown-sort-item">
                  <div
                    className="item-dropdown"
                    onClick={() => handleClickDropdownItem('recent')}
                  >
                    최신순
                  </div>
                  <div
                    className="item-dropdown"
                    onClick={() => handleClickDropdownItem('favorite')}
                  >
                    좋아요순
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* 판매 중인 상품 목록 */}
        {fetchingError && (
          <div className="list-selling-items-error">
            {fetchingError.message}
          </div>
        )}
        <div className="list-selling-items">
          {itemList?.map((item) => (
            <Item item={item} key={`selling-item-${item.id}`} />
          ))}
        </div>
        <div className="wrapper-pagination-bar">
          <PaginationBar
            totalPageNum={totalPageNum}
            activePageNum={page}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}

export default SellingItems;
