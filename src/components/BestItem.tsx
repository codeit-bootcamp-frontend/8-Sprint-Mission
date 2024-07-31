import { Item } from "ItemsType";
import heartIcon from "../assets/ic_heart.png";
import {
  BestImage,
  Content,
  Count,
  Description,
  Favorite,
  Icon,
  Price,
} from "../styles/components/Items";

type Props = {
  item: Item;
};

function BestItem({ item }: Props) {
  const { images, description, price, favoriteCount } = item;
  const sliceDescription = description.slice(0, 10);

  return (
    <li>
      <BestImage src={images[0]} alt="best" />
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

export default BestItem;
