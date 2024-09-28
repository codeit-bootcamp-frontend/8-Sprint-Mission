import HorizontalLine from '@core/ui/lines/HorizontalLine/HorizontalLine';
import CommentItem from './CommentItem';

interface CommentListProps {
  initCommentCount?: number;
  comments?: any[];
  emptyIcon?: any;
  emptyMessage?: string;
}

export default function CommentList({
  initCommentCount = 3,
  comments = [],
  emptyIcon,
  emptyMessage = '',
}: CommentListProps) {
  return (
    <>
      <div className="mt-6">
        {comments.length > 0 &&
          comments.map((comment) => (
            <div className="mb-6" key={`comment-${comment.id}`}>
              <div className="mb-6">
                <CommentItem
                  profileImageSrc={comment.writer.image}
                  content={comment.content}
                  nickname={comment.writer.nickname}
                  updatedAt={comment.updatedAt}
                />
              </div>
              <HorizontalLine />
            </div>
          ))}
        {comments.length < 1 && (
          <div className="flex flex-col justify-center items-center m-0">
            {emptyIcon}
            <span className="text-sm font-extralight leading-6 text-gray-400">
              {emptyMessage}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
