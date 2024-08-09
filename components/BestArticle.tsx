import Image from "next/image";

import { formatDate } from "@/utils/formatDate";
import { Article } from "@/models/article";

import icMedal from "@/public/images/ic_medal.svg";
import icHeart from "@/public/images/ic_heart.svg";
interface Props {
  articles: Article[];
}

export default function BestArticle({ articles }: Props) {
  return (
    <>
      {articles?.length > 0 &&
        articles.map((article) => (
          <div
            key={article.id}
            className="[&:nth-child(n+2)]:hidden md:[&:nth-last-child(2)]:block lg:[&:nth-last-child(1)]:block grow bg-gray-50 h-[198px] lg:h-[169px] px-[22px] pt-[46px] pb-4 relative rounded-lg"
          >
            <span className="absolute gap-1 flex-center top-0 left-[22px] w-[102px] h-[30px] text-white bg-my-blue rounded-b-2xl">
              <Image src={icMedal} alt="베스트 게시글 뱃지" />
              Best
            </span>
            <div className="flex h-full flex-col justify-between">
              <div className="flex justify-between gap-10">
                <div className="font-semibold text-lg">{article.content}</div>
                <Image
                  className="rounded-lg border border-gray-200 max-h-[72px]"
                  width={72}
                  height={72}
                  src={article.image}
                  alt="게시글 이미지"
                />
              </div>
              <div className="text-sm gap-2 flex justify-between">
                <span className="text-gray-700">{article.writer.nickname}</span>
                <span className="flex gap-0.5 grow text-gray-500">
                  <Image
                    src={icHeart}
                    className="mt-[2px]"
                    width={13.4}
                    height={11.65}
                    alt="좋아요"
                  />
                  {article.likeCount}
                </span>
                <span className="text-gray-400">
                  {formatDate(article.createdAt)}
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
