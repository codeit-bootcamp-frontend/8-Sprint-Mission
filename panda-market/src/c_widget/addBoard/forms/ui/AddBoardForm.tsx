import { ContentInput, TitleInput, ImageInput } from '@/d_features/addBoard';
import { useModal } from '@/f_shared/lib';
import { BtnSmall, ConfirmModal, SectionTitle } from '@/f_shared/ui';

import * as S from './AddBoardForm.style';
import { useInputValue } from '../lib';

export const AddBoardForm = () => {
  const { isOpen, onClose, handleOpen, handleConfirm, handleCancel } = useModal(
    {},
  );
  const { inputValues, handleInputValuesChange, handleImageDelete } =
    useInputValue();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    handleOpen();
  };

  return (
    <>
      <S.Form onSubmit={handleSubmit}>
        <S.HeaderWrapper>
          <SectionTitle>게시글 쓰기</SectionTitle>
          <BtnSmall
            $size="40"
            $style="default"
            isDisabled={false}
            onClick={handleOpen}
          >
            등록
          </BtnSmall>
        </S.HeaderWrapper>
        <TitleInput
          value={inputValues.title}
          onChange={handleInputValuesChange}
          isValid={true}
          errorMessage="필수 사항입니다."
        />

        <ContentInput
          value={inputValues.content}
          onChange={handleInputValuesChange}
          isValid={true}
          errorMessage="필수 사항입니다."
        />

        <ImageInput
          value={inputValues.image}
          onChange={handleInputValuesChange}
          onDelete={handleImageDelete}
        />
      </S.Form>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      >
        등록하시겠습니까?
      </ConfirmModal>
    </>
  );
};
