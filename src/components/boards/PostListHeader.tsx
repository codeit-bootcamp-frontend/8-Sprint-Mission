import React from "react";
import { orderOption } from "@/apis/getArticles";
import Dropdown from "../@shared/Dropdown";
import SearchBar, { SearchBarProps } from "../@shared/SearchBar";
import BlueButton from "../@shared/BlueButton";

interface PostListHeader extends SearchBarProps {
  currentOrderOption: orderOption;
  onOrderChange: React.Dispatch<React.SetStateAction<orderOption>>;
}

const ORDER_ITEM_DICT = {
  like: "좋아요순",
  recent: "최신순",
};

export default function PostListHeader({
  currentOrderOption,
  onOrderChange,
  onKeywordChange,
}: PostListHeader) {
  return (
    <div className="flex flex-col gap-[16px] md:gap-[24px]">
      <div className="flex justify-between items-center">
        <h2 className="text-gray-900 font-bold text-[18px] md:text-[20px]">게시글</h2>
        <div className="w-[88px] h-[42px]">
          <BlueButton shape="default">글쓰기</BlueButton>
        </div>
      </div>
      <div className="flex items-center gap-[12px] xl:gap-[16px]">
        <SearchBar onKeywordChange={onKeywordChange} />
        <Dropdown
          itemDict={ORDER_ITEM_DICT}
          currentItemValue={currentOrderOption}
          onItemChange={onOrderChange}
        />
      </div>
    </div>
  );
}
