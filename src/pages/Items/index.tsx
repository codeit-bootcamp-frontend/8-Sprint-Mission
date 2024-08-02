import { BestItems, PageNavigator, SellingItems } from "#pages";
import { useItems, usePageSize } from "#hooks";
import { useEffect, useMemo, useRef } from "react";

interface Item {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images: string[];
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}

export default function Items() {
  const { state, loadItemList, changeQuery } = useItems();

  const bestItems = useRef<Item[]>([]);
  const pageSize = usePageSize();
  const showItemNum = useMemo(() => {
    return pageSize === "small"
      ? { best: 1, selling: 4 }
      : pageSize === "medium"
        ? { best: 2, selling: 6 }
        : { best: 4, selling: 10 };
  }, [pageSize]);
  useEffect(() => {
    loadItemList({ ...state.query });
  }, [state.query]);

  useEffect(() => {
    const loadBestItemList = async () => {
      if (bestItems.current.length) {
        return;
      }
      const bestItemList: Item[] = await loadItemList(
        {
          ...state.query,
          orderBy: "favorite",
          pageSize: showItemNum.best,
        },
        true,
      );
      bestItems.current = bestItemList;
      loadItemList(
        {
          ...state.query,
          orderBy: "recent",
          pageSize: showItemNum.selling,
        },
        true,
      );
    };
    loadBestItemList();
  }, [state.query.orderBy]);
  return (
    <div className="flex-center m-container flex-col gap-6 pt-[70px]">
      <BestItems items={bestItems.current} showItemNum={showItemNum.best} />
      <SellingItems
        items={state.data.itemList}
        showItemNum={showItemNum.selling}
        changeQuery={changeQuery}
      />
      <PageNavigator />
    </div>
  );
}
