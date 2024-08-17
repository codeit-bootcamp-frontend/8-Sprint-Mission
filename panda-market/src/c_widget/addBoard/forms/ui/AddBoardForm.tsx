import { useRouter } from 'next/router';
import {
  ContentInput,
  TitleInput,
  ImageInput,
  useAddBoard,
} from '@/d_features/addBoard';
import { useImageUpload } from '@/d_features/imageUpload';
import { ROUTER_PATH, useModal } from '@/f_shared';
import { BtnSmall, ConfirmModal, SectionTitle } from '@/f_shared';
import { useFormValidation, useInputValue } from '../lib';

import * as S from './AddBoardForm.style';

export const AddBoardForm = () => {
  const imageMutation = useImageUpload();
  const boardMutation = useAddBoard();
  const router = useRouter();
  const { inputValues, handleInputValuesChange, handleImageDelete } =
    useInputValue();
  const { validation } = useFormValidation({ inputValues });

  const apihandle = async () => {
    if (inputValues.image) {
      await imageMutation
        .mutateAsync({
          image: inputValues.image,
        })
        .then(async (res) => {
          await boardMutation
            .mutateAsync({
              title: inputValues.title,
              content: inputValues.content,
              image: res?.url,
            })
            .then((res) => router.push(ROUTER_PATH.BOARD.detail(res.id)));
        });
    } else {
      await boardMutation
        .mutateAsync({
          title: inputValues.title,
          content: inputValues.content,
        })
        .then((res) => router.push(ROUTER_PATH.BOARD.detail(res.id)));
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
