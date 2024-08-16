import { IComment } from "@/types/comment";
import Comment from "./Comment";

import Image from "next/image";
import replayEmptyImage from "@/assets/images/img_reply_empty.png";

interface CommentListProps {
  commentList: IComment[];
}

function CommentList({ commentList: comments }: CommentListProps) {
  return (
    <div className="inquiry-wrapper">
      {!!comments.length ? (
        <ul className="comment-lists">
          {comments.map((comment: IComment) => (
            <div key={comment.id}>
              <Comment comment={comment} />
            </div>
          ))}
        </ul>
      ) : (
        <div className="no-inquiry-wrapper">
          <Image
            src={replayEmptyImage}
            alt="아직 문의가 없습니다"
            width={200}
            height={200}
          />
          <div className="no-inquiry-text">아직 문의가 없습니다.</div>
        </div>
      )}
    </div>
  );
}

export default CommentList;
