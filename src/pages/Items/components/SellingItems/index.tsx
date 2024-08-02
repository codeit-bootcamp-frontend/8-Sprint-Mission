import { Link } from "react-router-dom";

import icSort from "#assets/icons/ic_sort.svg";
import icSortMobile from "#assets/icons/ic_sortmobile.svg";
import icGlasses from "#assets/icons/ic_glasses.svg";
import { useEffect, useRef, useState } from "react";

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
  items: Item[] | any[];
  showItemNum: number;
  changeQuery: (newKey: Partial<Query>) => void;
}
interface Query {
  page: number;
  pageSize: number;
  orderBy: string;
  keyword: string | null;
}

export default function SellingItems({
  items,
  showItemNum,
  changeQuery,
}: Props) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onChange = () => {
    if (!inputRef.current) {
      return;
    }
    setInputValue(inputRef.current.value);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      changeQuery({ keyword: inputValue });
    }, 1000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue]);

  const showItems = items.slice(0, showItemNum);
  return (
    <div className="flex w-full max-w-md flex-col gap-4 md:max-w-4xl lg:max-w-none">
      <div className="flex flex-wrap items-center justify-between gap-y-2 md:gap-3">
        <label className="text-xl font-bold md:flex-grow">전체 상품</label>
        <Link to="" className="btn order-1 h-[42px] w-[133px] font-semibold">
          상품 등록하기
        </Link>
        <div className="order-1 flex basis-72 gap-1.5 rounded-xl bg-slate-100 px-4 py-[9px] md:order-none md:max-w-60">
          <img src={icGlasses} />
          <input
            ref={inputRef}
            value={inputValue}
            onChange={onChange}
            placeholder="검색할 상품을 입력해주세요"
            className="w-full bg-inherit outline-none"
          ></input>
        </div>
        <button className="flex-center order-2 h-[42px] w-[42px] rounded-xl border border-solid border-gray-200 md:hidden">
          <img src={icSortMobile} />
        </button>
        <button className="order-2 hidden h-[42px] w-[130px] items-center justify-between rounded-xl border border-solid px-5 py-4 md:flex">
          <span>최신순</span>
          <img src={icSort} />
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-x-3 gap-y-5">
        {items.length > 0 &&
          showItems.map((item) => (
            <div
              key={item.id}
              className="flex w-full max-w-[48%] flex-grow flex-col gap-y-1.5 md:max-w-[32%] lg:max-w-[19%]"
            >
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
