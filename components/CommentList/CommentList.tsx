import { IComment } from "@/types/comment";
import Comment from "./Comment";

import Image from "next/image";
import replayEmptyImage from "@/assets/images/img_reply_empty.png";

interface CommentListProps {
  commentList: IComment[];
}

function CommentList({ commentList: comments }: CommentListProps) {
  return (
    <div>
      {!!comments.length ? (
        <ul className="comment-lists">
          {comments.map((comment: IComment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        // TODO: EmptyContent 컴포넌트 빼내기 가능
        <div className="flex flex-col items-center justify-center">
          <Image
            src={replayEmptyImage}
            alt="아직 문의가 없습니다"
            width={200}
            height={200}
          />
          <div className="text-base font-normal text-gray-400">
            아직 문의가 없습니다.
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentList;
