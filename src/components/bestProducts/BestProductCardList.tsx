import { ProductItem } from "core/Interface/Product";
import BestProductCard from "./BestProductCard";
import "./card-best.css";

interface BestProductCardListProps {
  bestProducts: ProductItem[];
}

const BestProductCardList = ({ bestProducts }: BestProductCardListProps) => {
  return (
    <ul className="best-product-list">
      {bestProducts.length > 0 ? (
        bestProducts.map((product) => {
          return (
            <li key={product.id} className="best-product">
              <BestProductCard product={product} />
            </li>
          );
        })
      ) : (
        <p>베스트 상품이 없습니다.</p>
      )}
    </ul>
  );
};

export default BestProductCardList;
