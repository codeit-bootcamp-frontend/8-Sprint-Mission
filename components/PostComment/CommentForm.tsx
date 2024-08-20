import { useState, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import styles from './CommentForm.module.css';
import TextArea from '../Input/TextArea';
import LinkButton from '../Button/LinkButton';
import { postNewArticleComment } from '@/utils/api';

export default function CommnetForm() {
  const [commentValue, setCommentValue] = useState('');
  const router = useRouter();
  const token = localStorage.getItem('token');
  const { id } = router.query;

  const handleChangeValue = (name = 'comment', value: string) => {
    setCommentValue(value);
  };

  const isActive = commentValue.trim() !== '';

  const postNewComment = async (postId: string | string[] | undefined) => {
    const commentData = {
      content: commentValue,
    };
    try {
      const res = await postNewArticleComment(postId, commentData, token);
      if (res) {
        router.reload();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmitComment = (e: SyntheticEvent) => {
    e.preventDefault();
    postNewComment(id);
  };

  return (
    <form onSubmit={handleSubmitComment} className={styles.commentForm}>
      <TextArea
        style={{ height: '104px' }}
        id="comment"
        name="comment"
        label="답글달기"
        value={commentValue}
        placeholder="댓글을 입력해주세요."
        changeValue={handleChangeValue}
      />
      <div className={styles.commentBtn}>
        <LinkButton isActive={!isActive} type="submit" btnName="등록" />
      </div>
    </form>
  );
}
