import ProductListItem from "./ProductListItem";
import "./ProductList.css";

function ProductList({ items }) {
  return (
    <ul className="list-container">
      {items.map((item) => (
        <li className="list" key={item.id}>
          <ProductListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
