import ProductListItem from "./ProductListItem";

function ProductList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ProductListItem item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
