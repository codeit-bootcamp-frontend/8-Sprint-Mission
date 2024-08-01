import { SellGrid } from "../styles/components/Items";
import SellItem from "./SellItem";
import { Item } from "src/types/type";

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
