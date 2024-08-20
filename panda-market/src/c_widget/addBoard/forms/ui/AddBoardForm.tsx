import { useForm } from 'react-hook-form';
import {
  ContentInput,
  TitleInput,
  ImageInput,
  useAddBoard,
} from '@/d_features/addBoard';
import { useImageUpload } from '@/d_features/imageUpload';
import { useModal, BtnSmall, ConfirmModal, SectionTitle } from '@/f_shared';

import * as S from './AddBoardForm.style';

export const AddBoardForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setValue,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' });
  const imageMutation = useImageUpload();
  const boardMutation = useAddBoard();

  const apihandle = () => {
    const title = getValues<string>('title');
    const content = getValues<string>('content');
    const itemImage = getValues('picture');
    const boardApi = boardMutation({ title, content });
    if (itemImage) {
      imageMutation({
        image: itemImage[0],
        onSuccess: (data) => {
          boardApi({ image: data.url });
        },
        onError: () => {
          boardApi({});
        },
      });
    } else {
      boardApi({});
    }
  };
  const { isOpen, onClose, handleOpen, handleConfirm, handleCancel } = useModal(
    {
      confirmFn: () => {
        apihandle();
      },
    },
  );
  return (
    <>
      <S.Form onSubmit={handleSubmit(() => handleConfirm())}>
        <S.HeaderWrapper>
          <SectionTitle>게시글 쓰기</SectionTitle>
          <BtnSmall
            $size="40"
            $style="default"
            isDisabled={!isValid}
            onClick={handleOpen}
          >
            등록
          </BtnSmall>
        </S.HeaderWrapper>
        <TitleInput
          register={register('title', {
            required: '필수 사항입니다.',
            maxLength: 50,
          })}
          errorMessage={errors.title?.message?.toString()}
        />

        <ContentInput
          register={register('content', { required: '필수 사항입니다.' })}
          errorMessage={errors.content?.message?.toString()}
        />
        {/* <input type="file" {...register('picture')} /> */}
        <ImageInput
          register={register('picture')}
          watch={watch}
          name="picture"
          onDelete={() => {
            setValue('picture', null);
          }}
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
