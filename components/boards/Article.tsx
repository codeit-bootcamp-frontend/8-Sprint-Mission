import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import type { Article } from "@/types/article";

import icHeart from "@/public/images/ic_heart.svg";
import icProfile from "@/public/images/ic_profile.svg";
import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
interface Props {
  articles: Article[];
  setTarget: Dispatch<SetStateAction<HTMLLIElement | null>>;
}

export default function Article({ articles, setTarget }: Props) {
  return (
    <ul>
      {articles?.length > 0 &&
        articles.map((article, index) => (
          <li
            ref={index === articles.length - 1 ? setTarget : null}
            key={`${article.id}+${index}`}
            className=" bg-gray-50 px-2 pb-6 pt-2 mt-5 border-b shadow-md rounded-xl border-gray-200 h-[136px]"
          >
            <Link
              href={`/boards/${article.id}`}
              className="flex h-full flex-col justify-between"
            >
              <div className="flex justify-between gap-10">
                <div className="font-semibold text-lg">{article.content}</div>
                {article.image && (
                  <Image
                    className="rounded-lg border border-gray-200 max-h-[72px]"
                    width={72}
                    height={72}
                    src={article.image}
                    alt="게시글 이미지"
                  />
                )}
              </div>
              <div className="text-sm gap-2 flex justify-between pt-4">
                <Image
                  src={icProfile}
                  width={24}
                  height={24}
                  alt="유저 프로필"
                />
                <span className="text-gray-700">{article.writer.nickname}</span>
                <span className="text-gray-400 grow">
                  {formatDate(article.createdAt)}
                </span>
                <span className="flex gap-0.5  text-gray-500">
                  <Image
                    src={icHeart}
                    className="mb-[2px]"
                    width={13.4}
                    height={11.65}
                    alt="좋아요"
                  />
                  {article.likeCount}
                </span>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
