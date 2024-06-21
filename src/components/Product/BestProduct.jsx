import { useState, useEffect } from 'react';
import { getFavoriteProduct } from '../../utils/http.js';
import Section from '../../ui/Section/Section.jsx';
import ItemList from './ItemList';
import styles from './BestProduct.module.css';

export default function BestProduct() {
  const [itemList, setItemList] = useState([]);
  const [error, setError] = useState('');
  const [size, setSize] = useState(4);
  const deviceSize = {
    mobile: 768,
    tablet: 1199,
  };

  const loadedItem = async () => {
    const query = {
      size,
    };
    try {
      const product = await getFavoriteProduct({ query });
      const { list } = product;
      const loadedList = list.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        tags: item.tags,
        images: item.images,
        favoriteCount: item.favoriteCount,
      }));
      setItemList(loadedList);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < deviceSize.mobile) {
        setSize(1);
      } else if (window.innerWidth < deviceSize.tablet) {
        setSize(2);
      } else {
        setSize(4);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    </Section>
  );
}
