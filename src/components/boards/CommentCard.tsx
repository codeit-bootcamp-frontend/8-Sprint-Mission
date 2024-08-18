import Image from "next/image";
import MoreButton from "../../../public/images/i-menu.png";
import ProfileImage from "../../../public/images/i-profile.png";
import { ArticlesCommentList } from "@/types/commentType";

type CommentCardProps = {
  comment: ArticlesCommentList;
};

export default function CommentCard({ comment }: CommentCardProps) {
  const nowDate = new Date();
  const date = new Date(comment.createdAt);

  const diff = nowDate.getTime() - date.getTime();

  const diffDate = Math.floor(diff / (1000 * 60 * 60));

  return (
    <div className="mb-[24px] pt-[5px] pr-[5px] pb-[12px] bg-[#FCFCFC] border-b border-gray-200">
      <div className="flex justify-between items-center mb-[24px]">
        <h3 className="text-[14px] font-normal">{comment.content}</h3>
        <button>
          <Image width={3} height={13} src={MoreButton.src} alt="메뉴 아이콘" />
        </button>
      </div>
      <div className="flex items-center">
        <Image
          className="mr-[16px]"
          width={40}
          height={40}
          src={comment.writer.image || ProfileImage.src}
          alt="프로필 이미지"
        />
        <div>
          <p className="mb-[5px] text-[12px] font-normal">
            {comment.writer.nickname}
          </p>
          <span className="text-[12px] font-normal text-gray-400">
            {diffDate}시간 전
          </span>
        </div>
      </div>
    </div>
  );
}
