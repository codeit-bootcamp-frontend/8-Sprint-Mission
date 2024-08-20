import { useState } from "react";
import { Article } from "@/types/article";
import formatDate from "@/lib/formatDate";

import Image from "next/image";
import kebabMenuIcon from "@/assets/images/ic_kebab.png";
import profileImage from "@/assets/images/img_profile.png";
import likeIconFull from "@/assets/images/ic_heart_full.png";
import likeIconEmpty from "@/assets/images/ic_heart_empty.png";

interface DetailArticleProps {
  article: Article;
}

function DetailArticle({ article }: DetailArticleProps) {
  const { title, writer, likeCount, createdAt, content } = article;
  const [isLikeClicked, setIsLikeClicked] = useState<boolean>(false);

  const handleLikeButtonClick = () => {
    setIsLikeClicked((prevIsLikeClicked) => !prevIsLikeClicked);
  };

  return (
    <section>
      <div className="mb-6 border-b">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <button>
            <Image
              src={kebabMenuIcon}
              alt="케밥 메뉴 아아콘"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="mb-4 flex items-center justify-start">
          <div className="mr-8 flex items-center justify-start gap-4 border-r">
            <Image
              src={profileImage}
              alt="사용자 프로필 이미지"
              width={40}
              height={40}
            />
            <div className="mr-8 flex items-center justify-between gap-2">
              <h5 className="text-sm font-medium text-gray-600">
                {writer.nickname || "Anonymous"}
              </h5>
              <h5 className="text-sm font-normal text-gray-400">
                {formatDate(new Date(createdAt))}
              </h5>
            </div>
          </div>
          <button onClick={handleLikeButtonClick}>
            <div className="flex items-center justify-center gap-1 rounded-full border border-gray-200 px-3 py-1">
              <Image
                src={isLikeClicked ? likeIconFull : likeIconEmpty}
                alt="좋아요 아이콘"
                width={32}
                height={32}
              />
              <h5 className="text-gray-500">{likeCount}</h5>
            </div>
          </button>
        </div>
      </div>
      <h4 className="text-lg font-normal text-gray-800">{content}</h4>
    </section>
  );
}

export default DetailArticle;
