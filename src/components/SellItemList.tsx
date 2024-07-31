import { Item } from "ItemsType";
import { SellGrid } from "../styles/components/Items";
import SellItem from "./SellItem";

type Props = {
  items: Item[];
};

function SellItemList({ items }: Props) {
  return (
    <SellGrid mt={40}>
      {items.map((item) => (
        <SellItem key={item.id} item={item} />
      ))}
    </SellGrid>
  );
}

export default SellItemList;
