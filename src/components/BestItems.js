import { getProducts } from "../api.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import "./AllItems.css";
import "./global.css";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1;
  }
  if (width < 1280) {
    return 2;
  }
  return 4;
};

function BestItems() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const sortedItems = (products) => {
    return [...products].sort((a, b) => b.favoriteCount - a.favoriteCount);
  };

  const showBestProducts = () => {
    return sortedItems(products).slice(0, getPageSize());
  };

  const handleLoad = async (pageSize) => {
    try {
      const products = await getProducts(pageSize);
      setProducts(products.list);
    } catch (error) {
      console.error("상품 목록을 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);
    handleLoad(pageSize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <>
      <div className="title">베스트 상품</div>
      <div className="bestItemsMenu">
        {showBestProducts().map((product) => (
          <ItemList product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default BestItems;
