import { ChangeEvent, useState } from 'react';
import s from './CommentSection.module.scss';
import CommentThread from './CommentThread';

type CommentSection = {
  articleId: number;
};

function CommentSection({ articleId }: CommentSection) {
  const [comment, setComment] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {};

  return (
    <>
      <section className={s.commentInput}>
        <h3>댓글 달기</h3>

        <textarea placeholder={'댓글을 입력해주세요.'} value={comment} onChange={handleInputChange} />

        <button onClick={handlePostComment} disabled={!comment.trim()}>
          등록
        </button>
      </section>

      <CommentThread articleId={articleId} />
    </>
  );
}

export default CommentSection;
