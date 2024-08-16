import { Article } from "@/axios/articles";
import createDateStringWithDot from "@/utils/createDateStringWithDot";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface BasicPostCardProps {
  article: Article;
}

export default function BasicPostCard({ article }: BasicPostCardProps) {
  const { pathname } = useRouter();
  return (
    <Link href={`${pathname}/${article.id}`} className="w-full h-full">
      <article className="flex flex-col border-solid border-b-[1px] border-gray-200 gap-[16px] h-[138px] pb-[24px]">
        <div className="flex justify-between">
          <p className="text-gray-800 font-semibold text-[18px] md:text-[20px]">{article.title}</p>
          <Image
            className="bg-gray rounded-[8px] border-solid border-[1px] border-gray-200"
            width={72}
            height={72}
            src={article.image || "/images/panda_logo.png"}
            alt="게시글 이미지"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[8px]">
            <Image width={24} height={24} src="/images/img_basic_user_pfp.png" alt="" />
            <div className="text-gray-600 text-[14px] font-normal">{article.writer.nickname}</div>
            <div className="text-gray-400 text-[14px] font-normal">
              {createDateStringWithDot(article.createdAt)}
            </div>
          </div>
          <div className="flex justify-center items-center gap-[8px]">
            <button className="relative w-[24px] h-[24px]">
              <Image width={24} height={24} src="/images/ic_heart_inactive.png" alt="좋아요 하트" />
            </button>
            <div className="text-gray-500 text-[16px] font-normal w-[50px]">
              {article.likeCount}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
