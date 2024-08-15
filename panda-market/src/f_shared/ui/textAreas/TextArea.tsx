import * as S from './TextArea.style';

interface TextAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isValid: boolean;
  id: string;
  name: string;
}

export const TextArea = ({
  value,
  id,
  name,
  onChange,
  placeholder,
  isValid,
}: TextAreaProps) => {
  return (
    <S.TextArea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $isValid={isValid}
    />
  );
};
