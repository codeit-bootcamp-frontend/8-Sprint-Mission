import { CommentTypes } from "@/types/comment";
import getTimeElapsed from "@/lib/getTimeElapsed";

import Image from "next/image";
import defaultProfileImage from "@/assets/images/img_profile.png";
import kebabMenuIcon from "@/assets/images/ic_kebab.png";

interface CommentProps {
  comment: CommentTypes;
}

function Comment({ comment }: CommentProps) {
  const { writer, content, updatedAt } = comment;
  const profileImage = writer.image || defaultProfileImage;

  const timeElapsed = getTimeElapsed(new Date(updatedAt));

  return (
    <div className="mb-6 border-b border-gray-200 bg-[#fcfcfc] pb-3">
      <div className="mb-6 flex items-center justify-between">
        <div>{content}</div>
        <button>
          <Image
            src={kebabMenuIcon}
            alt="케밥 메뉴 아아콘"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="flex items-center justify-start gap-2">
        <Image
          className="writer image"
          src={profileImage}
          alt={`${writer.nickname}`}
          width={40}
          height={40}
        />
        <div className="flex flex-col items-start justify-start">
          <div className="text-xs font-normal text-gray-600">
            {writer.nickname}
          </div>
          <div className="text-xs font-normal text-gray-400">{timeElapsed}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
