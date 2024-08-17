import { Comment } from "@/axios/comments";
import elapsedTimeCalc from "@/utils/elapsedTimeCalc";
import Image from "next/image";

interface PostCommentCardProps {
  comment: Comment;
}

export default function PostCommentCard({ comment }: PostCommentCardProps) {
  const { content, writer, createdAt } = comment;

  return (
    <li className="pb-[12px] border-b-[1px] h-min-[100px] border-gray-200 bg-comment-bg">
      <div className="flex justify-between items-center mb-[24px]">
        <div className="font-normal text-[14px] text-gray-800 ">{content}</div>
        <button className="relative w-[24px] h-[24px]">
          <Image fill src="/images/ic_kebab_btn.png" alt="게시글 케밥 메뉴" />
        </button>
      </div>
      <div className="flex gap-[8px] items-center">
        <div className="relative w-[32px] h-[32px]">
          <Image
            fill
            src={writer.image || "/images/img_basic_user_pfp.png"}
            alt="댓글 작성자 프로필"
          />
        </div>
        <div className="flex flex-col gap-[4px]">
          <div className="font-normal text-[12px] text-gray-600">{writer.nickname}</div>
          <div className="font-normal text-[12px] text-gray-400">{elapsedTimeCalc(createdAt)}</div>
        </div>
      </div>
    </li>
  );
}
