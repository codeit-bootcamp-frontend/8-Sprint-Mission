import * as S from './TextArea.style';

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isValid: boolean;
}

export const TextArea = ({
  value,
  onChange,
  placeholder,
  isValid,
}: TextAreaProps) => {
  return (
    <S.TextArea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $isValid={isValid}
    />
  );
};
