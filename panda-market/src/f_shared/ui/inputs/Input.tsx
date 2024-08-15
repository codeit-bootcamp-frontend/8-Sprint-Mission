import * as S from './Input.style';

type InputMode = 'default' | 'sort';

interface InputProps {
  type?: InputMode;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  name: string;
  id: string;
}

export const Input = ({
  type = 'default',
  id,
  name,
  placeholder,
  value,
  onChange,
  isValid,
}: InputProps) => {
  return (
    <S.Input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      $isValid={isValid}
    />
  );
};
