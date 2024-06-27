import SalesProductCard from "./SalesProductCard";
import "./card-sales.css";
import { ProductItem } from "core/Interface/Product";

interface SalesProductCardListProps {
  salesProducts: ProductItem[];
}

const SalesProductCardList = ({ salesProducts }: SalesProductCardListProps) => {
  return (
    <ul className="sales-product-list">
      {salesProducts.map((product) => {
        return (
          <li key={product.id} className="sales-product">
            <SalesProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default SalesProductCardList;
