import UIInputLabel from '@core/ui/inputs/UIInputLabel/UIInputLabel';
import styles from './ArticleCommentForm.module.scss';
import UITextarea from '@core/ui/inputs/UITextarea/UITextarea';
import UIButton from '@core/ui/buttons/UIButton/UIButton';
import useArticleCommentForm from '@lib/hooks/useArticleCommentForm';

const ArticleCommentForm = () => {
  const { setComment, addComment: submitComment } = useArticleCommentForm();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  return (
    <>
      <form className={styles['form']} onSubmit={submitComment}>
        <UIInputLabel className={styles['form__label']} text="댓글달기" />
        <UITextarea
          className={styles['form__input']}
          placeholder="댓글을 입력해주세요"
          onTextareaChange={handleChange}
          onTextareaKeyDown={handleKeyDown}
        />
        <div className={styles['form__buttonWrapper']}>
          <UIButton type="box" buttonTagType="submit">
            등록
          </UIButton>
        </div>
      </form>
    </>
  );
};

export default ArticleCommentForm;
