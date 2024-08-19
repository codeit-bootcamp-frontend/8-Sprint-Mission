import { TextareaHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { match } from 'ts-pattern';

import * as S from './TextArea.style';

type TextAreaType = 'valid' | 'default';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  mode?: TextAreaType;
  isValid?: boolean;
  register: UseFormRegisterReturn;
}

type TextAreaMatchType = { type: 'valid' } | { type: 'default' };

export const TextArea = ({
  mode = 'default',
  register,
  isValid,
  placeholder,
}: TextAreaProps) => {
  const textareaMatch: TextAreaMatchType = { type: mode };
  const TextAreaContent = match(textareaMatch)
    .with({ type: 'valid' }, () => (
      <S.TextArea {...register} placeholder={placeholder} $isValid={isValid} />
    ))
    .with({ type: 'default' }, () => (
      <S.TextArea {...register} placeholder={placeholder} $isValid={true} />
    ))
    .exhaustive();

  return <>{TextAreaContent}</>;
};
