import { Article } from "@/axios/articles";
import createDateStringWithDot from "@/utils/createDateStringWithDot";
import Image from "next/image";

interface PostDetailProps {
  article: Article;
}

export default function PostDetail({ article }: PostDetailProps) {
  const { title, content, likeCount, writer, createdAt } = article;
  return (
    <article>
      <div className="flex gap-[8px] justify-between mb-[16px]">
        <h3 className="text-[20px] font-bold">{title}</h3>
        <button className="relative w-[24px] h-[24px]">
          <Image fill src="/images/ic_kebab_btn.png" alt="게시글 케밥 메뉴" />
        </button>
      </div>
      <div className="flex items-center pb-[16px] border-b-[1px] border-gray-200">
        <div className="flex gap-[8px] items-center pr-[16px] md:pr-[32px] xl:gap-[16px] border-r-[1px] border-gray-200">
          <Image width={40} height={40} src="/images/img_basic_user_pfp.png" alt="프로필 이미지" />
          <div className="text-[14px] font-medium text-gray-600">{writer.nickname}</div>
          <div className="text-[14px] font-normal text-gray-400">
            {createDateStringWithDot(createdAt)}
          </div>
        </div>
        <div className="flex gap-[4px] items-center ml-[16px] md:ml-[32px] px-[12px] py-[4px] min-w-[71px] border-[1px] rounded-full">
          <button className="relative w-[24px] h-[24px] md:w-[28px] md:h-[28px]">
            <Image fill src="/images/ic_heart_inactive.png" alt="좋아요 하트" />
          </button>
          <div className="font-medium text-[16px] text-gray-500">{likeCount}</div>
        </div>
      </div>
      <div className="text-[16px] font-normal text-gray-800 xl:text-[18px] pt-[16px] xl:pt-[24px]">
        {content}
      </div>
    </article>
  );
}
