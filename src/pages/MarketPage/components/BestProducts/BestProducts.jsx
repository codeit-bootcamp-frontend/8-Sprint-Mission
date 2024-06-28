import React, { useEffect, useState } from "react";
import { getProducts } from "../../../../api/api";
import Product from "../Product/Product";
import "./BestProducts.css";

function BestProducts() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(4);

  const fetchBestProducts = async (pageSize, orderBy) => {
    const { list: bestProductList } = await getProducts(pageSize, orderBy);
    setProducts(bestProductList);
  };
  const getHtmlSize = () => {
    const widthSize = window.innerWidth;
    if (widthSize < 768) {
      return 1;
    } else if (widthSize < 1200) {
      return 2;
    } else {
      return 4;
    }
  };

  useEffect(() => {
    fetchBestProducts(pageSize, "favorite");
    const handleResizeScreen = () => setPageSize(getHtmlSize());
    window.addEventListener("resize", handleResizeScreen);

    return () => {
      window.removeEventListener("resize", handleResizeScreen);
    };
  }, [pageSize]);

  return (
    <div className="best-Products-box">
      <h1 className="best-products-title">베스트 상품</h1>
      <div className="best-products">
        {products?.map((product, idx) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default BestProducts;
