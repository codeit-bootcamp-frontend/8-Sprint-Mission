import BestProductCard from "./BestProductCard";
import "./best-product-card-list.css";

const BestProductCardList = ({ bestProducts }) => {
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
