import BestProductCard from "./BestProductCard";

const BestProductCardList = ({ bestProducts }) => {
  return (
    <ul>
      {bestProducts.map((product) => {
        return (
          <li key={product.id}>
            <BestProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
};

export default BestProductCardList;
