import { getProducts } from "../../../lib/api";
import { useEffect, useState, useMemo } from "react";
import ItemList from "./ItemList";
import "./AllItems.css";
import "../../../style/global.css";
import { Product } from "../../../type/ProductType";
import { useQuery } from "@tanstack/react-query";

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
  const [pageSize, setPageSize] = useState<number>(getPageSize());
  const orderBy = "favorite";

  const { data } = useQuery<{
    list: Product[];
  }>({
    queryKey: ["bestProducts", { pageSize, orderBy }],
    queryFn: () => getProducts({ pageSize, orderBy }),
  });
  console.log(data);
  const products = data?.list || [];

  const bestProducts = useMemo(() => {
    return products.slice(0, getPageSize());
  }, [products]);

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };
    window.addEventListener("resize", handleResize);

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
