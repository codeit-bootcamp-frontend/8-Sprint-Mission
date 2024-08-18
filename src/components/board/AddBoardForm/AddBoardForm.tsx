import styles from './AddBoardForm.module.scss';

import SectionTitle from '@core/ui/SectionTitle/SectionTitle';
import UIButton from '@core/ui/buttons/UIButton/UIButton';
import UIInputLabel from '@core/ui/inputs/UIInputLabel/UIInputLabel';
import UIInput from '@core/ui/inputs/UIInput/UIInput';
import UITextarea from '@core/ui/inputs/UITextarea/UITextarea';
import UIImageInput from '@core/ui/inputs/UIImageInput/UIImageInput';
import useAddImageFile from '@lib/hooks/useAddImageFile';

type AddBoardFormProps = {};

const AddBoardForm = ({ ...props }: AddBoardFormProps) => {
  const { imageFile, initialPreview, setInitialPreview, handleImageChange } =
    useAddImageFile();

  const handleSubmit = () => {};

  return (
    <>
      <form className={styles['form']}>
        <div className={styles['form__header']}>
          <SectionTitle title="게시글 쓰기" />
          <UIButton
            children={'등록'}
            handleClick={handleSubmit}
            type="box"
            buttonTagType="submit"
            isDisabled={false}
            isSmallButton={false}
          />
        </div>
        <div className={styles['form__input']}>
          <UIInputLabel text="*제목" />
          <UIInput
            placeholder="제목을 입력해주세요"
            onKeyDown={() => {}}
            onChange={() => {}}
          />
        </div>
        <div className={styles['form__input']}>
          <UIInputLabel text="*내용" />
          <UITextarea
            placeholder="내용을 입력해주세요"
            onTextareaKeyDown={() => {}}
            onTextareaChange={() => {}}
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
