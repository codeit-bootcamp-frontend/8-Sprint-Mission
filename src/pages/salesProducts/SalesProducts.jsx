import { useEffect, useState } from "react";
import SalesProductCardList from "../../components/salesProducts/SalesProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

import "./sales-products.css";

const SalesProducts = () => {
  const [salesProducts, setSalesProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSalesProducts = async (options) => {
    let result;
    try {
      setErrorMessage(null);
      result = await fetchProduct(options);
    } catch (error) {
      setErrorMessage(error);
      return;
    }
    const { list } = result;
    setSalesProducts(list);
  };

  useEffect(() => {
    handleSalesProducts({
      currnetPage: 1,
      pageSize: 12,
      orderBy: "recent",
      searchKeyword: "",
    });
  }, []);

  return (
    <section className="sales-product-container">
      <Title>판매 중인 상품</Title>
      {!errorMessage ? (
        <SalesProductCardList salesProducts={salesProducts} />
      ) : (
        <p>{errorMessage.message}</p>
      )}
    </section>
  );
};

export default SalesProducts;
