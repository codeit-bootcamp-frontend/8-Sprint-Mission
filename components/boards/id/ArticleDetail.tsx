import useArticleDetail from "@/hooks/useArticleDetail";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import icProfile from "@/public/images/ic_profile.svg";
import icHeart from "@/public/images/ic_heart.svg";

export default function ArticleDetail() {
  const { article, isLoading, isError } = useArticleDetail();

  if (isLoading || !article) {
    return <div>불러오는중</div>;
  } else if (isError) {
    return <div>에러</div>;
  }

  return (
    <div className="flex flex-col gap-4 pb-10">
      <p className="font-bold text-xl">{article.title}</p>
      <div className="flex items-center pb-4 gap-2 border-b">
        <Image src={icProfile} width={40} height={40} alt="유저 프로필" />
        <span className="pl-2 font-medium">{article.writer.nickname}</span>
        <span className="pr-6 border-r border-gray-200 text-gray-400">
          {formatDate(article.createdAt)}
        </span>
        <button className="ml-4 flex-center gap-1 rounded-[35px] w-[87px] border h-10">
          <Image src={icHeart} width={28} height={23} alt="좋아요" />
          <span className="font-medium">{article.likeCount}</span>
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {article.image && (
          <Image
            priority
            src={article.image}
            width={200}
            height={200}
            alt="게시물 이미지"
            className="rounded-3xl"
          />
        )}
        {article.content}
      </div>
    </div>
  );
}
