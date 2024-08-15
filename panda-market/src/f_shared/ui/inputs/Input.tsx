import * as S from './Input.style';

type InputMode = 'default' | 'sort';

interface InputProps {
  type?: InputMode;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

export const Input = ({
  type = 'default',
  placeholder,
  value,
  onChange,
  isValid,
}: InputProps) => {
  return (
    <S.Input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $isValid={isValid}
    />
  );
};
