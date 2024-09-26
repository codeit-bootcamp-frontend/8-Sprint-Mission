import { useEffect, useState } from "react";
import { ProductTypes } from "@/types/product";
import BestProductList from "@/components/ProductList/BestProductList";
import AllProductList from "@/components/ProductList/AllProductList";
import instance from "@/lib/instance";
import { API_PATH } from "@/lib/path";

function Items() {
  const [products, setProducts] = useState<ProductTypes[] | null>(null);

  async function fetchProductData() {
    const response = await instance.get(API_PATH.products());
    return response.data.list ?? [];
  }

  useEffect(() => {
    async function getProductsData() {
      const data = await fetchProductData();
      setProducts(data);
    }

    getProductsData();
  }, []);

  return (
    <div className="product-lists">
      <BestProductList
        className="best-product-list"
        products={products || []}
      />
      <AllProductList className="all-product-list" products={products || []} />
    </div>
  );
}

export default Items;
