import { useEffect, useState } from "react";
import BestProductCardList from "../../components/bestProductList/BestProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

import "./best-product-list.css";

const BestProductList = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleBestProducts = async (options) => {
    let result;
    try {
      setErrorMessage(null);
      result = await fetchProduct(options);
    } catch (error) {
      setErrorMessage(error);
      return;
    }
    const { list } = result;
    setBestProducts(list);
  };

  useEffect(() => {
    handleBestProducts({
      currnetPage: 1,
      pageSize: 4,
      orderBy: "favorite",
      searchKeyword: "",
    });
  }, []);

  return (
    <section className="best-product-container">
      <Title>베스트 상품</Title>
      {!errorMessage ? (
        <BestProductCardList bestProducts={bestProducts} />
      ) : (
        <p>{errorMessage.message}</p>
      )}
    </section>
  );
};

export default BestProductList;
