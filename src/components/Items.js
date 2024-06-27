import { useEffect, useState } from "react";
import AllProduct from "./AllProduct";
import BestProduct from "./BestProduct";
import { getProducts } from "../api.js";

function Items() {
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(4);
  const [order, setOrder] = useState("favorite");

  const handleLoad = async (options) => {
    let { list } = await getProducts(options);
    setProducts(list);
  };

  useEffect(() => {
    handleLoad({ pageSize, order });
  }, []);

  return (
    <>
      <div className="main-wrap">
        <BestProduct products={products}></BestProduct>
        <AllProduct products={products}></AllProduct>
      </div>
    </>
  );
}

export default Items;
