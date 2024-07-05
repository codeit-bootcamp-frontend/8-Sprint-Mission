import { useState, useEffect } from 'react';
import { getAllProduct } from '../../utils/http.js';
import Pagination from '../Pagination/Pagination.jsx';
import ItemList from './ItemList.jsx';
import SortOptions from '../SortOptions/SortOptions.jsx';
import SearchForm from '../SearchForm/SearchForm.jsx';
import Button from '../../ui/Button/LinkButton.jsx';
import Section from '../../ui/Section/Section.jsx';
import Loading from '../../ui/Loading/Loading.jsx';
import styles from './AllProduct.module.css';

const DEVICE_SIZE = {
  mobile: 768,
  tablet: 1199,
};

const getResponseProducts = () => {
  let windowWidth = window.innerWidth;

  if (windowWidth < DEVICE_SIZE.mobile) {
    return 4;
  } else if (windowWidth < DEVICE_SIZE.tablet) {
    return 6;
  } else {
    return 10;
  }
};

export default function AllProduct() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [maxPage, setMaxPage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSortOpen, setIsSortOpen] = useState(false);
  // const [size, setSize] = useState(getResponseProducts());
  const [options, setOptions] = useState({
    size: getResponseProducts(),
    keyword: '',
    order: 'recent',
  });
  console.log(options.order);

  const showSortOptionHandler = () => {
    setIsSortOpen(prev => !prev);
  };

  const sortHandler = e => {
    const sortType = e.currentTarget.dataset.type;
    console.log(sortType);
    setOptions(prevOption => ({
      ...prevOption,
      order: sortType,
    }));
    setIsSortOpen(false);
  };

  const fetchProducts = async () => {
    const query = {
      currentPage,
      order: options.order,
      size: options.size,
      keyword: options.keyword,
    };
    setLoading(true);
    try {
      const product = await getAllProduct({ query });
      const { list, totalCount } = product;
      setLoading(false);
      setItemList(list);
      const maxPage = Math.ceil(totalCount / options.size);
      setMaxPage(maxPage);
    } catch (error) {
      setError(error.message);
    }
  };

  const searchHandler = value => {
    setCurrentPage(1);
    setOptions(prev => ({
      ...prev,
      keyword: value,
    }));
  };

  useEffect(() => {
    const handleResize = () => {
      setOptions(prevOption => ({
        ...prevOption,
        size: getResponseProducts(),
      }));
      // setSize(getResponseProducts());
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, options]);

  const pageHandler = page => {
    setCurrentPage(page);
  };

  const sortText = options.order === 'recent' ? '최신순' : '좋아요순';

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      <div className={styles.productHeader}>
        <div className={styles.titleContainer}>
          <h2 className={styles.productTitle}>판매 중인 상품</h2>
        </div>
        <SearchForm className={styles.form} searchHandler={searchHandler} />
        <Button
          className={styles.addItem}
          path="../additem"
          btnName="상품 등록하기"
        />
        <SortOptions
          isOpen={isSortOpen}
          showOptions={showSortOptionHandler}
          sortHandler={sortHandler}
          sortText={sortText}
        />
      </div>
      <div className={styles.productList}>
        {loading ? (
          <Loading className={styles.loading} />
        ) : (
          <div className={styles.listContainer}>
            {itemList.map(list => (
              <ItemList key={`product-${list.id}`} {...list} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        maxPage={maxPage}
        currentPage={currentPage}
        pageHandler={pageHandler}
        // loadProducts={loadProducts}
      />
    </Section>
  );
}
