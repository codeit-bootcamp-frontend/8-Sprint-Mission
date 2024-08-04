import { useState, useEffect } from 'react';
import { useAsyncStatus } from '../../hooks/useAsyncStatus';
import { getFavoriteProduct } from '../../utils/http';
import Loading from '../../ui/Loading/Loading';
import Section from '../../ui/Section/Section';
import ItemList from './ItemList';
import styles from './BestProduct.module.css';
import { ResponseProducts } from './@types/Products';

const deviceSize = {
  mobile: 768,
  tablet: 1199,
};
const getResponseProducts: () => ResponseProducts = () => {
  let windowWidth = window.innerWidth;

  if (windowWidth < deviceSize.mobile) {
    return 1;
  } else if (windowWidth < deviceSize.tablet) {
    return 2;
  } else {
    return 4;
  }
};

export default function BestProduct() {
  const {
    loading,
    error,
    fetchData: itemList,
    fetchProducts: fetchBestProducts,
  } = useAsyncStatus(getFavoriteProduct, []);
  const [size, setSize] = useState(getResponseProducts());

  useEffect(() => {
    const handleResize = () => {
      setSize(getResponseProducts());
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const query = {
      size,
    };
    fetchBestProducts({ query });
  }, [size]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      <h2 className={styles.title}>베스트 상품</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.list}>
          {itemList.map(list => (
            <ItemList key={`best-products-${list.id}`} {...list} />
          ))}
        </div>
      )}
    </Section>
  );
}
