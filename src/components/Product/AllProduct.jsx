import { useState, useEffect } from 'react';
import { getAllProduct } from '../../utils/http.js';
import Pagination from '../Pagination/Pagination.jsx';
import ItemList from './ItemList.jsx';
import SortOptions from '../SortOptions/SortOptions.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import NavigationBtn from '../../ui/Button/Button.jsx';
import Section from '../../ui/Section/Section.jsx';
import styles from './AllProduct.module.css';

export default function AllProduct() {
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [pageNum, setPageNum] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [size, setSize] = useState(10);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');
  const [order, setOrder] = useState('recent');

  const deviceSize = {
    mobile: 768,
    tablet: 1199,
  };

  const showSortOptionHandler = () => {
    setIsSortOpen(prev => !prev);
  };

  const sortHandler = e => {
    const sortType = e.currentTarget.dataset.type;
    setOrder(sortType);
  };

  const displayPagination = page => {
    const pageArray = Array.from({ length: page }, (v, i) => i + 1);
    setPageNum([...pageArray]);
  };

  const loadedItem = async () => {
    const query = {
      currentPage,
      order,
      size,
      keyword,
    };
    try {
      setLoading(true);
      const product = await getAllProduct({ query });
      const { list, totalCount } = product;
      const loadedList = list.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        tags: item.tags,
        images: item.images,
        favoriteCount: item.favoriteCount,
      }));
      setLoading(false);
      setItemList(loadedList);
      const maxPage = Math.ceil(totalCount / size);
      displayPagination(maxPage);
    } catch (error) {
      setError(error.message);
    }
  };

  const searchHandler = value => {
    setCurrentPage(1);
    setKeyword(value);
  };

  useEffect(() => {
    const handleResize = () => {
      let windowWidth = window.innerWidth;
      setCurrentPage(1);
      if (windowWidth < deviceSize.mobile) {
        setSize(4);
      } else if (windowWidth < deviceSize.tablet) {
        setSize(6);
      } else {
        setSize(10);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceSize.mobile, deviceSize.tablet]);

  useEffect(() => {
    loadedItem();
  }, [currentPage, size, order, keyword]);

  const pageHandler = page => {
    if (page < 1 || page > pageNum.length) {
      return;
    }
    setCurrentPage(page);
  };

  const sortText = order === 'recent' ? '최신순' : '좋아요순';

  const deskTopProduct = (
    <div className={styles.productHeader}>
      <div>
        <h2 className={styles.productTitle}>판매 중인 상품</h2>
      </div>
      <div className={styles.controlsContainer}>
        <SearchForm searchHandler={searchHandler} />
        <NavigationBtn path="../additem" btnName="상품 등록하기" />
        <SortOptions
          isOpen={isSortOpen}
          showOptions={showSortOptionHandler}
          sortHandler={sortHandler}
          sortText={sortText}
        />
      </div>
    </div>
  );

  const mobileProduct = (
    <div className={`${styles.productHeader} ${styles.mobile}`}>
      <div className={styles.productContainer}>
        <h2 className={styles.productTitle}>판매 중인 상품</h2>
        <div className={styles.addItemContainer}>
          <NavigationBtn path="../additem" btnName="상품 등록하기" />
        </div>
      </div>
      <div className={`${styles.controlsContainer} ${styles.mobile}`}>
        <SearchForm searchHandler={searchHandler} />
        <SortOptions
          isOpen={isSortOpen}
          showOptions={showSortOptionHandler}
          sortHandler={sortHandler}
          sortText={sortText}
        />
      </div>
    </div>
  );

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      {window.innerWidth > deviceSize.mobile ? deskTopProduct : mobileProduct}
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.listContainer}>
            {itemList.map(list => (
              <ItemList
                key={list.id}
                id={list.id}
                name={list.name}
                price={list.price}
                images={list.images}
                favoriteCount={list.favoriteCount}
              />
            ))}
          </div>
        )}
        <Pagination
          pageNum={pageNum}
          currentPage={currentPage}
          pageHandler={pageHandler}
        />
      </div>
    </Section>
  );
}
