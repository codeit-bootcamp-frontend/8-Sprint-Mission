import { Article } from "@/axios/articles";
import createDateStringWithDot from "@/utils/createDateStringWithDot";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface BestPostCardProps {
  article: Article;
}

export default function BestPostCard({ article }: BestPostCardProps) {
  const { pathname } = useRouter();
  return (
    <Link href={`${pathname}/${article.id}`} className="w-full h-full">
      <article className="relative w-full h-full px-[24px] pb-[16px] xl:pb-[9px] pt-[46px] bg-gray-50 rounded-[8px]">
        <Image
          className="absolute top-0 left-[32px]"
          width={102}
          height={30}
          src="/images/img_best_post_badge.png"
          alt="베스트 게시글 뱃지"
        />
        <div className="flex flex-col gap-[40px] xl:gap-[18px]">
          <div className="flex justify-between">
            <p className="text-gray-800 font-semibold text-[18px] xl:text-[20px] truncate">
              {article.title}
            </p>
            <div className="relative w-[72px] h-[72px] flex-shrink-0">
              <Image
                className="bg-gray rounded-[8px] border-solid border-[1px] border-gray-200"
                fill
                src={article.image || "/images/panda_logo.png"}
                alt="게시글 이미지"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[8px]">
              <div className="text-gray-600 text-[14px] font-normal">{article.writer.nickname}</div>
              <div className="flex gap-[4px] items-center">
                <button className="relative w-[16px] h-[16px]">
                  <Image
                    width={16}
                    height={16}
                    src="/images/ic_heart_inactive.png"
                    alt="좋아요 하트"
                  />
                </button>
                <div className="text-gray-500 text-[14px] font-normal">{article.likeCount}</div>
              </div>
            </div>
            <div className="text-gray-400 text-[14px] font-normal">
              {createDateStringWithDot(article.createdAt)}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
