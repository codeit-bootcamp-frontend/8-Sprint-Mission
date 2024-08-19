import { UseFormRegisterReturn } from 'react-hook-form';
import { Label, TextArea } from '@/f_shared';

import * as S from './ContentInput.style';

interface ContentInputProps {
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

export const ContentInput = ({ errorMessage, register }: ContentInputProps) => {
  return (
    <S.Wrapper>
      <Label htmlFor="content">*내용</Label>
      <TextArea
        register={register}
        mode="valid"
        isValid={errorMessage ? false : true}
        placeholder="내용을 입력해주세요"
      />
      <S.ErrorMessage $isValid={errorMessage ? false : true}>
        {errorMessage}
      </S.ErrorMessage>
    </S.Wrapper>
  );
};
