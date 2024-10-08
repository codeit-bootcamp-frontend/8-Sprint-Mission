import { useState, useEffect } from "react";
import Loading from "../../ui/Loading/Loading";
import Section from "../../ui/Section/Section";
import ItemList from "./ItemList";
import styles from "./BestProduct.module.css";
import { ResponseProducts } from "./@types/Products";
import { useFavoriteProducts } from "../../hooks/useFavoriteProducts";
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
  const [size, setSize] = useState(getResponseProducts());

  const {
    favoriteProductsData: itemList = [],
    favoriteProductsLoading: loading,
    favoriteProductsError: error,
  } = useFavoriteProducts({ size });

  useEffect(() => {
    const handleResize = () => {
      setSize(getResponseProducts());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Section>
      <div className={styles.section}>
        <h2 className={styles.title}>베스트 상품</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.list}>
            {itemList.map((list) => (
              <ItemList key={`best-products-${list.id}`} {...list} />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
