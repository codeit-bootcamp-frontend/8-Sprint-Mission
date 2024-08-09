import { useState } from "react";
import Image from "next/image";

import useArticles from "@/hooks/useArticles";

import Article from "./Article";
import icGlasses from "@/public/images/ic_glasses.svg";
import icSort from "@/public/images/ic_sort.svg";
import icSortMobile from "@/public/images/ic_sortmobile.svg";
import DropDown from "./DropDown";

export default function ArticleList() {
  const { isLoading, loadArticles, articles, setQueryParams } = useArticles();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const onClickDropDown = () => {
    setIsOpenDropDown((prev) => !prev);
  };

  const onClickOrderBy = (orderBy: "recent" | "like") => {
    setQueryParams((prev) => ({
      ...prev,
      orderBy: orderBy,
    }));
  };
  return (
    <div className="pt-10">
      <div className="flex justify-between">
        <span className="font-bold text-lg">게시글</span>
        <button className="btn order-1 h-[42px] w-[88px] font-semibold">
          글쓰기
        </button>
      </div>
      <div className="flex relative pt-6 gap-4">
        <div className=" flex basis-72 gap-1.5 rounded-xl bg-slate-100 px-4 py-[9px]  grow">
          <Image src={icGlasses} width={15} height={15} alt="게시글 검색" />
          <input
            placeholder="검색할 상품을 입력해주세요"
            className="w-full bg-inherit outline-none"
          />
        </div>

        <button
          onClick={onClickDropDown}
          className="flex-center h-[42px] w-[42px] rounded-xl border border-solid border-gray-200 md:hidden"
        >
          <Image src={icSortMobile} alt="정렬하기" />
        </button>

        <button
          onClick={onClickDropDown}
          className="hidden h-[42px] w-[130px] items-center justify-between rounded-xl border border-solid px-5 py-4 md:flex"
        >
          <span>최신순</span>
          <Image src={icSort} alt="정렬하기" />
        </button>
        {isOpenDropDown && <DropDown onClick={onClickOrderBy} />}
      </div>

      <Article articles={articles} />
    </div>
  );
}
