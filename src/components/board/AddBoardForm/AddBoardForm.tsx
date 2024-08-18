import styles from './AddBoardForm.module.scss';

import SectionTitle from '@core/ui/SectionTitle/SectionTitle';
import UIButton from '@core/ui/buttons/UIButton/UIButton';
import UIInputLabel from '@core/ui/inputs/UIInputLabel/UIInputLabel';
import UIInput from '@core/ui/inputs/UIInput/UIInput';
import UITextarea from '@core/ui/inputs/UITextarea/UITextarea';
import UIImageInput from '@core/ui/inputs/UIImageInput/UIImageInput';
import useArticleForm from '@lib/hooks/useArticleForm';

type AddBoardFormProps = {};

const AddBoardForm = ({ ...props }: AddBoardFormProps) => {
  const {
    setTitle,
    setContent,
    submitArticle,
    imageFile,
    initialPreview,
    handleImageChange,
  } = useArticleForm();

  const handleChangeTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContentInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  return (
    <>
      <form className={styles['form']}>
        <div className={styles['form__header']}>
          <SectionTitle title="게시글 쓰기" />
          <UIButton
            children={'등록'}
            handleClick={submitArticle}
            type="box"
            buttonTagType="button"
            isDisabled={false}
            isSmallButton={false}
          />
        </div>
        <div className={styles['form__input']}>
          <UIInputLabel text="*제목" />
          <UIInput
            placeholder="제목을 입력해주세요"
            onKeyDown={handleKeyDown}
            onChange={handleChangeTitleInput}
          />
        </div>
        <div className={styles['form__input']}>
          <UIInputLabel text="*내용" />
          <UITextarea
            placeholder="내용을 입력해주세요"
            onTextareaKeyDown={handleKeyDown}
            onTextareaChange={handleChangeContentInput}
          />
        </div>
        <div className={styles['form__input']}>
          <UIInputLabel text="*이미지" />
          <UIImageInput
            onChangeFile={handleImageChange}
            initialPreview={initialPreview}
            file={imageFile}
            name="imgFile"
          />
        </div>
      </form>
    </>
  );
};

export default AddBoardForm;
