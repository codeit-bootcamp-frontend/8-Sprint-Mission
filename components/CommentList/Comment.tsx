import Image from "next/image";
import { IComment } from "@/types/comment";
import getTimeElapsed from "@/lib/getTimeElapsed";

interface CommentProps {
  comment: IComment;
}

function Comment({ comment }: CommentProps) {
  const { writer, content, updatedAt } = comment;

  const timeElapsed = getTimeElapsed(new Date(updatedAt));

  return (
    <div className="comment-wrapper">
      <div className="comment-content">{content}</div>
      <div className="writer-wrapper">
        <Image
          className="writer image"
          src={writer.image}
          alt={`${writer.nickname}`}
          width={40}
          height={40}
        />
        <div className="comment-info">
          <div className="nickname">{writer.nickname}</div>
          <div className="time-elapsed">{timeElapsed}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
