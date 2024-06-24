import { useState, useEffect } from 'react';
import { getFavoriteProduct } from '../../utils/http.js';
import Section from '../../ui/Section/Section.jsx';
import ItemList from './ItemList';
import styles from './BestProduct.module.css';

const deviceSize = {
  mobile: 768,
  tablet: 1199,
};
const getResponseProducts = () => {
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
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState('');
  const [size, setSize] = useState(getResponseProducts());

  const loadedItem = async () => {
    const query = {
      size,
    };
    try {
      const product = await getFavoriteProduct({ query });
      const { list } = product;
      setItemList(list);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setSize(getResponseProducts());
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [deviceSize]);

  useEffect(() => {
    loadedItem();
  }, [size]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Section>
      <h2 className={styles.title}>베스트 상품</h2>
      <div className={styles.list}>
        {itemList.map(list => (
          <ItemList key={`best-products-${list.id}`} {...list} />
        ))}
      </div>
    </Section>
  );
}
