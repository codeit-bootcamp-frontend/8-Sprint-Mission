import { useEffect, useState } from "react";
import BestProductCardList from "../../components/bestProducts/BestProductCardList";

import Title from "../../core/titles/Title";
import fetchProduct from "../../lib/api/product";

import "./best-products.css";
import useResize from "../../lib/hooks/useResize";
import { ProductItem, QueryOptions } from "core/Interface/Product";

const BestProducts = () => {
  const [bestProducts, setBestProducts] = useState<ProductItem[]>([]);
  const [errorMessage, setErrorMessage] = useState<Error>();
  const getBestPageSize = (width: number) => {
    if (1200 <= width) {
      return 4;
    }
    if (768 <= width) {
      return 2;
    }
    return 1;
  };
  const size = useResize({ getPageSize: getBestPageSize });

  const handleBestProducts = async (options: QueryOptions) => {
    let result;
    try {
      setErrorMessage(undefined);
      result = await fetchProduct(options);
    } catch (error: unknown) {
      const message = error as Error;
      setErrorMessage(message);

      return;
    }
    const { list } = result;
    setBestProducts(list);
  };

  useEffect(() => {
    handleBestProducts({
      currentPage: 1,
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
