import { ContentInput, TitleInput, ImageInput } from '@/d_features/addBoard';
import { BtnSmall, ConfirmModal, SectionTitle } from '@/f_shared/ui';
import { useModal } from '@/f_shared/lib';
import { useFormValidation, useInputValue } from '../lib';

import * as S from './AddBoardForm.style';
import { useAddBoard } from '@/d_features/addBoard/lib';
import { useImageUpload } from '@/d_features/imageUpload';

export const AddBoardForm = () => {
  const imageMutation = useImageUpload();
  const boardMutation = useAddBoard();
  const { inputValues, handleInputValuesChange, handleImageDelete } =
    useInputValue();
  const { validation } = useFormValidation({ inputValues });
  const apihandle = () => {
    if (inputValues.image) {
      imageMutation.mutate({ image: inputValues.image });
      const imageUrl = imageMutation.data;
      // boardMutation.mutate({
      //   title: inputValues.title,
      //   content: inputValues.content,
      //   image: imageUrl,
      // });
    } else {
      boardMutation.mutate({
        title: inputValues.title,
        content: inputValues.content,
      });
    }
  };
  const { isOpen, onClose, handleOpen, handleConfirm, handleCancel } = useModal(
    { confirmFn: apihandle },
  );

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
            isDisabled={!validation}
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
