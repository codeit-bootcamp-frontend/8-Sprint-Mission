import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import S from "@/components/ItemsOnSale.module.css";
import DropDown from "@/components/DropDown";

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

interface ItemsOnSaleProps {
  items: {
    list: Item[];
  };
  orderBy: string;
  handleOrderChange: (order: string) => void;
}

function SaleItems({ item }: BestItemsProps) {
  const { favoriteCount, images, price, name, id } = item;
  const router = useRouter();
  const won = price.toLocaleString("ko-KR");
  const onImgClick = (id: number) => {
    router.push(`/items/${id}`);
  };
  return (
    <div className={S.saleItemBox} onClick={() => onImgClick(id)}>
      <div className={S.saleItemImgBox}>
        <Image fill className={S.saleItemImg} src={images[0]} alt={name} />
      </div>
      <div className={S.saleItemTitle}>{name}</div>
      <div className={S.saleItemPrice}>{won}원</div>
      <div className={S.saleItemFavorite}>
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

function ItemsOnSale({ items, orderBy, handleOrderChange }: ItemsOnSaleProps) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [items]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const cutItems = [...items.list];
  return (
    <div className={S.saleItem}>
      <div className={S.miniNavBar}>
        <h2 className={S.saleTitle}>판매 중인 상품</h2>
        <div className={S.miniNavBarTools}>
          <div className={S.searchBox}>
            <Image
              className={S.searchIcon}
              src="/images/icon/btn_icon/ic_search.png"
              alt="검색 돋보기 아이콘"
              width={24}
              height={24}
            />
            <input className={S.search} placeholder="검색할 상품을 입력해 주세요" />
          </div>
          <Link className={S.addItemBtn} href="additem">
            상품 등록하기
          </Link>
          <DropDown
            className={S.dropDownBtn}
            orderBy={orderBy}
            handleOrderChange={handleOrderChange}
          />
        </div>
      </div>
      <ul className={S.saleItemContainer}>
        {cutItems.map((item) => (
          <li key={item.id}>
            <SaleItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemsOnSale;
