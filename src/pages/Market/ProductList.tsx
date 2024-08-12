import ProductListItem from "./ProductListItem";
import "./ProductList.css";

type Props = {
  items: {
    createdAt: string;
    favoriteCount: number;
    ownerId: number;
    images: string[];
    tags: string[];
    price: number;
    description: string;
    name: string;
    id: number;
  }[];
};

function ProductList({ items }: Props) {
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
