import { Item } from "src/types/type";
import heartIcon from "../assets/ic_heart.png";

type Props = {
  type: string;
  item: Item;
};

function Product({ type, item }: Props) {
  const { images, description, price, favoriteCount } = item;

  return (
    <li>
      <img className="best__img" src={images[0]} alt={type} />
      <div className="item__text">
        <p>
          {description.length > 10
            ? description.slice(0, 10) + "..."
            : description}
        </p>
        <strong>{`${price}원`}</strong>
        <div className="favorite">
          <img className="favorite__icon" src={heartIcon} alt="favorite" />
          <p>{favoriteCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Product;
