import { ProductItem } from "core/Interface/Product";
import BestProductCard from "./BestProductCard";
import "./card-best.css";

interface BestProductCardListProps {
  bestProducts: ProductItem[];
}

const BestProductCardList = ({ bestProducts }: BestProductCardListProps) => {
  return (
    <ul className="best-product-list">
      {bestProducts.map((product) => {
        return (
          <li key={product.id} className="best-product">
            <BestProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default BestProductCardList;
