import { useState, useEffect } from "react";
import "./Items.css";
import fetchProductData from "../api";
import BestProductList from "./BestProductList";
import AllProductList from "./AllProductList";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProductsData() {
      const data = await fetchProductData();
      setProducts(data);
    }

    getProductsData();
  }, []);

  return (
    <>
      <div className="product-lists">
        <BestProductList className="best-product-list" products={products} />
        <AllProductList className="all-product-list" products={products} />
      </div>
    </>
  );
}

export default Main;
