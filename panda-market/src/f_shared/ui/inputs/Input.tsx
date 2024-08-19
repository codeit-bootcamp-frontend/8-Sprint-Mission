import { UseFormRegisterReturn } from 'react-hook-form';

import * as S from './Input.style';

type InputMode = 'default' | 'sort';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mode?: InputMode;
  isValid: boolean;
  register: UseFormRegisterReturn;
}

export const Input = ({
  type,
  mode = 'default',
  register,
  placeholder,
  isValid,
}: InputProps) => {
  return (
    <S.Input
      type={type}
      {...register}
      placeholder={placeholder}
      $isValid={isValid}
    />
  );
};
