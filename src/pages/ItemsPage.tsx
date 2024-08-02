import { useState, useEffect } from "react";

import "./ItemsPage.css";
import { fetchProductData } from "../utils/api";
import BestProductList from "../components/items/BestProductList";
import AllProductList from "../components/items/AllProductList";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string;
  favoriteCount: number;
  tags?: string[];
  createdAt: string;
}

function ItemsPage() {
  const [products, setProducts] = useState<Product[] | null>(null);

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
        <BestProductList
          className="best-product-list"
          products={products || []}
        />
        <AllProductList
          className="all-product-list"
          products={products || []}
        />
      </div>
    </>
  );
}

export default ItemsPage;
