import Image from "next/image";
import CommentImage from "../../../public/images/no-comment.png";

export default function NotComment() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        className="mb-[16px]"
        width={140}
        height={140}
        src={CommentImage.src}
        alt="댓글 이미지"
      />
      <p className="text-[16px] font-normal leading-[1.5] text-center text-gray-400">
        아직 댓글이 없어요,
        <br />
        지금 댓글을 달아보세요!
      </p>
    </div>
  );
}
