import "./PaginationBar.css";
import pageNationLeftIcon from "../../assets/images/icon/btn_icon/ic_page_left_arrow.png";
import pageNationRightIcon from "../../assets/images/icon/btn_icon/ic_page_right_arrow.png";
import { useEffect, useState } from "react";

interface Item {
  favoriteCount: number;
  images: string;
  price: number;
  name: string;
  id: string;
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
  // const totalItem = items.totalCount;
  const btnRange = Math.ceil(totalCount / pageItem);

  const onClickNum = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.currentTarget as HTMLUListElement;
    if (target.tagName !== "LI") return;
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
    <div className="pagiation-bar">
      <div
        className="pagiation-arrow"
        onClick={onClickLeft}
        style={{ opacity: pageBy === 1 ? "40%" : "100%" }}
      >
        <img
          src={pageNationLeftIcon}
          alt="페이지 네이션바 왼쪽 이동 화살표"
          width="16px"
          height="16px"
        />
      </div>
      <ul className="pagiation-num" onClick={onClickNum}>
        {list.map((item, index) => (
          <li key={item + index} className={index + 1 === navClick ? "pagiation-target" : ""}>
            {item}
          </li>
        ))}
      </ul>
      <div
        className="pagiation-arrow"
        onClick={onClickRight}
        style={{ opacity: pageBy === btnRange ? "40%" : "100%" }}
      >
        <img
          src={pageNationRightIcon}
          alt="페이지 네이션바 오른쪽 이동 화살표"
          width="16px"
          height="16px"
        />
      </div>
    </div>
  );
}
export default PaginationBar;
