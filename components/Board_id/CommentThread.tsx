import { useEffect, useState } from 'react';
import s from './CommentThread.module.scss';
import { getArticleComments } from '@/api/articleApi';
import EmptyState from '../layout/EmptyState';
import CommentItem from './CommentItem';

type CommentThread = {
  articleId: number;
};

function CommentThread({ articleId }: CommentThread) {
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    if (!articleId) return;

    const fetchComments = async () => {
      const response: CommentListResponse = await getArticleComments({
        articleId,
      });

      setComments(response.list);
    };

    fetchComments();
  }, [articleId]);

  if (comments && !comments.length) {
    return <EmptyState text={`아직 댓글이 없어요,\n지금 댓글을 달아 보세요!`} />;
  } else {
    return (
      <div className={s.contain}>
        {comments.map((item) => (
          <CommentItem item={item} key={`comment-${item.id}`} />
        ))}
      </div>
    );
  }
}

export default CommentThread;
