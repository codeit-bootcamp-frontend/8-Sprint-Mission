import { ChangeEvent, useState } from "react";
import Image from "next/image";

import useArticles from "@/hooks/useArticles";

import Article from "./Article";
import icGlasses from "@/public/images/ic_glasses.svg";
import icSort from "@/public/images/ic_sort.svg";
import icSortMobile from "@/public/images/ic_sortmobile.svg";
import DropDown from "@/components/ui/DropDown";

const INIT_ORDERS = {
  recent: "최신순",
  like: "좋아요순",
} as const;
type OrderByType = "최신순" | "좋아요순";

export default function ArticleList() {
  const { isLoading, articles, setQueryParams, setTarget, setArticles } =
    useArticles();
  const [nowOrderBy, setNowOrderBy] = useState<OrderByType>(INIT_ORDERS.recent);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const toggleDropDown = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onClickOrderBy = (orderBy: "recent" | "like") => {
    setArticles([]);
    setQueryParams((prev) => ({
      ...prev,
      orderBy: orderBy,
    }));
    setNowOrderBy(INIT_ORDERS[orderBy]);
    toggleDropDown();
  };

  let debounceTimer: NodeJS.Timeout;
  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      setArticles([]);
      setQueryParams((prev) =>
        prev.page === 1
          ? { ...prev, keyword: e.target.value }
          : { ...prev, page: 1, keyword: e.target.value }
      );
    }, 500);
  };

  return (
    <div className="pt-10">
      <div className="flex justify-between ">
        <span className="font-bold text-lg">게시글</span>
        <button className="btn order-1 h-[42px] w-[88px] font-semibold">
          글쓰기
        </button>
      </div>
      <div className="flex relative pt-6 gap-4">
        <div className=" flex basis-72 gap-1.5 rounded-xl bg-slate-100 px-4 py-[9px]  grow">
          <Image src={icGlasses} width={15} height={15} alt="게시글 검색" />
          <input
            onChange={onChangeKeyword}
            placeholder="검색할 상품을 입력해주세요"
            className="w-full bg-inherit outline-none"
          />
        </div>

        <button
          onClick={toggleDropDown}
          className="flex-center h-[42px] w-[42px] rounded-xl border border-solid border-gray-200 md:hidden"
        >
          <Image src={icSortMobile} alt="정렬하기" />
        </button>

        <button
          onClick={toggleDropDown}
          className="hidden h-[42px] w-[130px] items-center justify-between rounded-xl border border-solid px-5 py-4 md:flex"
        >
          <span>{nowOrderBy}</span>
          <Image src={icSort} alt="정렬하기" />
        </button>
        {isOpenDropDown && <DropDown onClick={onClickOrderBy} />}
      </div>

      <Article setTarget={setTarget} articles={articles} />
      {isLoading && (
        <div className="flex-center w-full text-2xl">@로딩스피너@</div>
      )}
    </div>
  );
}
