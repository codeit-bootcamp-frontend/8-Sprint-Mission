import { getProducts } from "../api.js";
import { useEffect, useState } from "react";
import ItemList from "./ItemList.js";
import "./AllItems.css";
import "./global.css";

function BestItems() {
  const [products, setProducts] = useState([]);

  const sortedItems = (products) => {
    return [...products].sort((a, b) => b.favoriteCount - a.favoriteCount);
  };

  const showBestProducts = () => {
    return sortedItems(products).slice(0, 4);
  };

  const handleLoad = async (orderQuery) => {
    try {
      const products = await getProducts(orderQuery);
      setProducts(products.list);
    } catch (error) {
      console.error("상품 목록을 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    handleLoad("favoriteCount");
  }, []);

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
