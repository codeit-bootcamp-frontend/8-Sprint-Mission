import { Input, Label } from '@/f_shared/ui';

import * as S from './TitleInput.style';

interface TitleInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  isValid: boolean;
}

export const TitleInput = ({
  value,
  onChange,
  errorMessage,
  isValid,
}: TitleInputProps) => {
  return (
    <S.Wrapper>
      <Label htmlFor="title">*제목</Label>
      <Input
        id="title"
        value={value}
        name="title"
        onChange={onChange}
        placeholder="제목을 입력해주세요"
        isValid={isValid}
      />
      <S.ErrorMessage $isValid={isValid}>{errorMessage}</S.ErrorMessage>
    </S.Wrapper>
  );
};
