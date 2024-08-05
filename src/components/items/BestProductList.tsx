import "./BestProductList.css";
import ProductListItem from "./ProductListItem";

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

interface Products {
  className?: string;
  products: Product[];
}

function BestProductList({ products }: Products) {
  const sortedProducts = [...products].sort(
    (a, b) => b["favoriteCount"] - a["favoriteCount"]
  );
  const showedProducts = sortedProducts.slice(0, 4);

  return (
    <div className="best-product-list">
      <div className="label-title">베스트 상품</div>
      <ul className="products">
        {showedProducts.map((showedProduct) => {
          return (
            <li key={showedProduct.id}>
              <ProductListItem
                item={showedProduct}
                className="best-product-list-item"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BestProductList;
