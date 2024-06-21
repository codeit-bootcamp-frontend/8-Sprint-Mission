import { useEffect, useState } from "react";
import BestProductCardList from "../../components/bestProductList/BestProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

const BestProductList = () => {
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [order, setOrder] = useState("recent");
  const [currnetPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleProducts = async (options) => {
    let result;
    try {
      setErrorMessage(null);
      result = await fetchProduct(options);
    } catch (error) {
      setErrorMessage(error);
      return;
    }
    const { list, totalCount } = result;
    setProducts(list);
    const totalPage = Math.ceil(totalCount / pageSize);
    setTotalPage(totalPage);
  };

  const handleBestProducts = async (options) => {
    let result;
    try {
      setErrorMessage(null);
      result = await fetchProduct(options);
    } catch (error) {
      setErrorMessage(error);
      return;
    }
    console.log(result);
    const { list } = result;
    setBestProducts(list);
  };

  useEffect(() => {
    handleProducts({
      currnetPage: 1,
      pageSize: 12,
      orderBy: "recent",
      searchKeyword: "",
    });
    handleBestProducts({
      currnetPage: 1,
      pageSize: 4,
      orderBy: "favorite",
      searchKeyword: "",
    });
  }, [order]);

  return (
    <section>
      <Title>베스트 상품</Title>
      <BestProductCardList bestProducts={bestProducts} />
    </section>
  );
};

export default BestProductList;
