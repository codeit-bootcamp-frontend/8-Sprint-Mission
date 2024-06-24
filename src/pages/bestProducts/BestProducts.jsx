import { useEffect, useState } from "react";
import BestProductCardList from "../../components/bestProducts/BestProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

import "./best-products.css";
import useResize from "../../lib/hooks/useResize";

const BestProducts = () => {
  const [bestProducts, setBestProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const getBestPageSize = (width) => {
    if (1200 <= width) {
      return 4;
    }
    if (768 <= width) {
      return 2;
    }
    return 1;
  };
  const size = useResize({ getPageSize: getBestPageSize });

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
      pageSize: size,
      orderBy: "favorite",
      searchKeyword: "",
    });
  }, [size]);

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

export default BestProducts;
