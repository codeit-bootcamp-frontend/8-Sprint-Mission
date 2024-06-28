import ProductListItem from "./ProductListItem";

function BestList({ items }) {
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

export default BestList;
