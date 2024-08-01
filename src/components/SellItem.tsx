import {
  Content,
  Description,
  Favorite,
  Price,
  Icon,
  Count,
  SellImage,
} from "../styles/components/Items";
import heartIcon from "../assets/ic_heart.png";
import { Item } from "src/types/type";
import { useNavigate } from "react-router-dom";

type Props = {
  item: Item;
};

function SellItem({ item }: Props) {
  const navigate = useNavigate();
  const { id, images, description, price, favoriteCount } = item;
  const sliceDescription = description.slice(0, 10);
  return (
    <li
      onClick={() => {
        navigate(`/items/${id}`);
      }}
    >
      <SellImage src={images[0]} alt="item" />
      <Content>
        <Description>{sliceDescription}</Description>
        <Price>{`${price}원`}</Price>
        <Favorite>
          <Icon src={heartIcon} alt="favorite" />
          <Count>{favoriteCount}</Count>
        </Favorite>
      </Content>
    </li>
  );
}

export default SellItem;
