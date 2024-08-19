import { UseFormRegisterReturn } from 'react-hook-form';
import { Input, Label } from '@/f_shared';

import * as S from './TitleInput.style';

interface TitleInputProps {
  errorMessage?: string;
  register: UseFormRegisterReturn;
}

export const TitleInput = ({ errorMessage, register }: TitleInputProps) => {
  return (
    <S.Wrapper>
      <Label htmlFor="title">*제목</Label>
      <Input
        type="text"
        register={register}
        isValid={errorMessage ? false : true}
        placeholder="제목을 입력해주세요"
      />
      <S.ErrorMessage $isValid={errorMessage ? false : true}>
        {errorMessage}
      </S.ErrorMessage>
    </S.Wrapper>
  );
};
