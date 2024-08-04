import { useState } from 'react';
import styles from './CommentForm.module.css';
import TextArea from '../../../ui/FormComponents/TextArea';
import Button from '../../../ui/Button/Button';

export default function CommnetForm() {
  const [commentValue, setCommentValue] = useState<string>('');

  const handleChangeValue = (name: string = 'comment', value: string) => {
    setCommentValue(value);
  };

  const isActive: boolean = commentValue.trim() !== '';

  return (
    <>
      <form className={styles.commentForm}>
        <TextArea
          id="comment"
          name="comment"
          variant="comment"
          label="문의하기"
          value={commentValue}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유표시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          changeValue={handleChangeValue}
        />
        <div className={styles.commentBtn}>
          <Button
            isActive={!isActive}
            variant={true}
            type="submit"
            btnName="등록"
          />
        </div>
      </form>
    </>
  );
}
