import BestItem from "./BestItem";
import { BestGrid } from "../styles/components/Items";
import { Item } from "src/types/type";

type Props = {
  items: Item[];
};

function BestItemList({ items }: Props) {
  return (
    <BestGrid>
      {items.map((item) => {
        const { id } = item;
        return <BestItem key={id} item={item} />;
      })}
    </BestGrid>
  );
}

export default BestItemList;
