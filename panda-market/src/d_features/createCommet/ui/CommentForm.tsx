import { useRouter } from 'next/router';
import { FieldValues, useForm } from 'react-hook-form';
import { BtnSmall, TextArea } from '@/f_shared';
import { useCreateComment } from '../lib';

import * as S from './CommentForm.style';

export const CommentForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const { isValid } = formState;
  const router = useRouter();
  const { boardItemId } = router.query;
  const commentMutate = useCreateComment();
  const onSubmit = (e: FieldValues) => {
    commentMutate
      .mutateAsync({
        articleId: `${boardItemId}`,
        content: e.boardComment,
      })
      .then((res) => {
        router.reload();
        return res;
      });
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer>
        <S.Label htmlFor="boardComment">댓글달기</S.Label>

        <TextArea
          mode="hookForm"
          register={register('boardComment', { required: true })}
          placeholder="댓글을 입력해주세요."
        />
      </S.InputContainer>
      <BtnSmall
        $size="40"
        $style="default"
        onClick={handleSubmit(onSubmit)}
        isDisabled={!isValid}
      >
        등록
      </BtnSmall>
    </S.Form>
  );
};
