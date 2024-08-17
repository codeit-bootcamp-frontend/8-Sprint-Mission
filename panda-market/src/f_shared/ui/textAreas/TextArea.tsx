import { TextareaHTMLAttributes } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { match } from 'ts-pattern';

import * as S from './TextArea.style';

type TextAreaType = 'valid' | 'default' | 'hookForm';

interface TextAreaProps<T extends FieldValues>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode?: TextAreaType;
  isValid?: boolean;
  register?: UseFormRegisterReturn;
}

type TextAreaMatchType =
  | { type: 'valid' }
  | { type: 'default' }
  | { type: 'hookForm' };

export const TextArea = ({
  mode = 'default',
  value,
  id,
  name,
  onChange,
  placeholder,
  register,
  isValid = true,
}: TextAreaProps<FieldValues>) => {
  const textareaMatch: TextAreaMatchType = { type: mode };
  const TextAreaContent = match(textareaMatch)
    .with({ type: 'hookForm' }, () => (
      <S.TextArea {...register} placeholder={placeholder} $isValid={isValid} />
    ))
    .with({ type: 'valid' }, () => (
      <S.TextArea
        // {...register?(name)}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $isValid={isValid}
      />
    ))
    .with({ type: 'default' }, () => (
      <S.TextArea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ))
    .exhaustive();
  return <>{TextAreaContent}</>;
};
