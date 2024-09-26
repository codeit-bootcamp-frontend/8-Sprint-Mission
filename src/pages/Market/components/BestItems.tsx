import { getProducts } from "../../../lib/api";
import { useEffect, useState, useMemo } from "react";
import ItemList from "./ItemList";
import "./AllItems.css";
import "../../../style/global.css";
import { Product } from "../../../type/ProductType";

const getPageSize = () => {
  const width = window.innerWidth;

  switch (true) {
    case width < 768:
      return 1;

    case width < 1280:
      return 2;

    default:
      return 4;
  }
};

function BestItems() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageSize, setPageSize] = useState<number>(getPageSize());

  const bestProducts = useMemo(() => {
    return products.slice(0, getPageSize());
  }, [products]);

  const handleLoadProducts = async (pageSize: number, orderBy: string) => {
    try {
      const products = await getProducts({ pageSize, orderBy });
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
    handleLoadProducts(pageSize, "favorite");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <>
      <div className="best-items-title">베스트 상품</div>
      <div className="bestItemsMenu">
        {bestProducts.map((product) => (
          <ItemList product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default BestItems;
