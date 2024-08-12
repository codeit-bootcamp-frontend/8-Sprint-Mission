import S from "@/components/PaginationBar.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Item {
  favoriteCount: number;
  images: string;
  price: number;
  name: string;
  id: number;
}

interface Items {
  list: Item[];
}

interface Pagination {
  items: Items;
  pageBy: number;
  totalCount: number;
  handlePaginationChange: (page: number) => void;
  itemsSize: number;
}

function PaginationBar({
  items,
  totalCount,
  pageBy,
  handlePaginationChange,
  itemsSize,
}: Pagination) {
  const [list, setList] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [navClick, setNavClick] = useState(Number(pageBy));
  const pageItem = itemsSize;
  const btnRange = Math.ceil(totalCount / pageItem);

  const onClickNum = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLUListElement;
    setNavClick(Number(target.innerText));
    handlePaginationChange(Number(target.innerText));
  };

  const onClickLeft = () => {
    if (navClick === 1) return;
    setNavClick(navClick - 1);
    handlePaginationChange(navClick - 1);
  };

  const onClickRight = () => {
    if (navClick === btnRange) return;
    setNavClick(navClick + 1);
    handlePaginationChange(navClick + 1);
  };

  useEffect(() => {
    const pageList = () => {
      setLoading(true);
      const newList = [];
      for (let i = 1; i <= btnRange; i++) {
        newList.push(i);
      }
      setList(newList);
    };
    pageList();
    setLoading(false);
  }, [itemsSize, items, navClick, btnRange]);

  useEffect(() => {
    setNavClick(1);
    handlePaginationChange(1);
  }, [btnRange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={S.paginationBar}>
      <div
        className={S.paginationArrow}
        onClick={onClickLeft}
        style={{ opacity: pageBy === 1 ? "40%" : "100%" }}
      >
        <Image
          src="/images/icon/btn_icon/ic_page_left_arrow.png"
          alt="페이지 네이션바 왼쪽 이동 화살표"
          width={16}
          height={16}
        />
      </div>
      <ul className={S.paginationNum} onClick={onClickNum}>
        {list.map((item, index) => (
          <li key={item + index} className={index + 1 === navClick ? S.paginationTarget : ""}>
            {item}
          </li>
        ))}
      </ul>
      <div
        className={S.paginationArrow}
        onClick={onClickRight}
        style={{ opacity: pageBy === btnRange ? "40%" : "100%" }}
      >
        <Image
          src="/images/icon/btn_icon/ic_page_right_arrow.png"
          alt="페이지 네이션바 오른쪽 이동 화살표"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}

export default PaginationBar;
