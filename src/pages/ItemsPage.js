import { useState, useEffect } from "react";

import "./ItemsPage.css";
import fetchProductData from "../components/api";
import BestProductList from "../components/items/BestProductList";
import AllProductList from "../components/items/AllProductList";

function ItemsPage() {
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

export default ItemsPage;
