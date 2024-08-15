import { Label, TextArea } from '@/f_shared/ui';
import * as S from './ContentInput.style';

interface ContentInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isValid: boolean;
  errorMessage?: string;
}

export const ContentInput = ({
  value,
  onChange,
  isValid,
  errorMessage = '',
}: ContentInputProps) => {
  return (
    <S.Wrapper>
      <Label htmlFor="content">*내용</Label>
      <TextArea
        id="content"
        name="content"
        value={value}
        onChange={onChange}
        isValid={isValid}
        placeholder="내용을 입력해주세요"
      />
      <S.ErrorMessage $isValid={isValid}>{errorMessage}</S.ErrorMessage>
    </S.Wrapper>
  );
};
