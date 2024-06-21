import SalesProductCard from "./SalesProductCard";
import "./card-sales.css";

const SalesProductCardList = ({ salesProducts }) => {
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
