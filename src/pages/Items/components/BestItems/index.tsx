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
interface Props {
  items: Item[];
  showItemNum: number;
}

export default function BestItems({ items, showItemNum }: Props) {
  const showItems = items.slice(0, showItemNum);
  return (
    <div className="flex w-full max-w-md flex-col gap-4 md:max-w-4xl lg:max-w-none">
      <label className="text-xl font-bold">베스트 상품</label>
      <div className="flex justify-center gap-x-3">
        {items.length > 0 &&
          showItems.map((item) => (
            <div key={item.id} className="flex w-full flex-col gap-y-1.5">
              <img src={item.images[0]} className="w-full"></img>
              <p className="text-sm">{`${item.description} 팝니다`}</p>
              <span className="font-bold">{`${item.price.toLocaleString()}원`}</span>
              <span className="text-sm text-gray-600">
                🤍{item.favoriteCount}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
