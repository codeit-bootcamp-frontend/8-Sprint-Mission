import useArticleComment from "@/hooks/useArticleComment";
import { formatHowAgo } from "@/utils/formatHowAgo";
import icKebob from "@/public/images/ic_kebob.svg";
import icProfile from "@/public/images/ic_profile.svg";
import Image from "next/image";

export default function CommentList() {
  const { commentList, isLoading, isError } = useArticleComment();

  if (isLoading) {
    return <div>로딩중</div>;
  } else if (isError) {
    return <div>에러</div>;
  }
  return (
    <div className="pt-[98px]">
      {commentList?.length > 0 &&
        commentList.map((comment, index) => (
          <div
            key={comment.id * index}
            className="border-b border-solid pt-[15px] pb-3 relative border-gray-200 flex flex-col gap-6"
          >
            <div>{comment.content}</div>
            <div className="flex items-start gap-2">
              <Image
                alt="댓글프로필"
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
                src={comment.writer.image || icProfile}
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-700">
                  {comment.writer.nickname}
                </span>
                <span className="text-xs text-gray-500">
                  {formatHowAgo(comment.createdAt)}
                </span>
              </div>
            </div>
            <button onClick={() => {}} className="absolute right-0 top-[15px]">
              <Image src={icKebob} alt="댓글수정" />
            </button>
          </div>
        ))}
    </div>
  );
}
