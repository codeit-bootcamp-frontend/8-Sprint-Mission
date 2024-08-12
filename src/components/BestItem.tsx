import S from "./BestItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

interface Item {
  favoriteCount: number;
  images: string;
  price: number;
  name: string;
  id: number;
}

interface BestItemsProps {
  item: Item;
}

interface BestItemListProps {
  items: {
    list: Item[];
  };
}

function BestItems({ item }: BestItemsProps) {
  const { favoriteCount, images, price, name, id } = item;
  const router = useRouter();
  const won = price.toLocaleString("ko-KR");
  const onImgClick = (id: number) => {
    router.push(`/items/${id}`);
  };

  return (
    <div className={S.bestItemBox}>
      <div className={S.BestItemImgBox}>
        <Image
          className={S.bestItemImg}
          src={images[0]}
          alt={name}
          onClick={() => onImgClick(id)}
          fill
        />
      </div>
      <div className={S.bestItemTitle}>{name}</div>
      <div className={S.bestItemPrice}>{won}원</div>
      <div className={S.bestItemFavorite}>
        <Image
          src="/images/icon/btn_icon/ic_favorite.png"
          width={16}
          height={16}
          alt="favoriteIcon"
        />
        {favoriteCount}
      </div>
    </div>
  );
}

function BestItemList({ items }: BestItemListProps) {
  const cutItems = [...items.list];

  return (
    <div className={S.bestItem}>
      <h2 className={S.bestTitle}>베스트 상품</h2>
      <ul className={S.bestItemContainer}>
        {cutItems.map((item) => (
          <li key={item.id}>
            <BestItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestItemList;
