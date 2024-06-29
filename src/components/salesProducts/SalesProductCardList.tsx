import SalesProductCard from "./SalesProductCard";
import "./card-sales.css";
import { ProductItem } from "core/Interface/Product";

interface SalesProductCardListProps {
  salesProducts: ProductItem[];
}

const SalesProductCardList = ({ salesProducts }: SalesProductCardListProps) => {
  return (
    <ul className="sales-product-list">
      {salesProducts.length > 0 ? (
        salesProducts.map((product) => {
          return (
            <li key={product.id} className="sales-product">
              <SalesProductCard product={product} />
            </li>
          );
        })
      ) : (
        <p>판매 중인 상품이 없습니다.</p>
      )}
    </ul>
  );
};

export default SalesProductCardList;
