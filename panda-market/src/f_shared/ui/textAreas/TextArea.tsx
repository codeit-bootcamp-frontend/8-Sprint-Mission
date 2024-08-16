import { match } from 'ts-pattern';

import * as S from './TextArea.style';

type TextAreaType = 'valid' | 'default';

interface TextAreaProps {
  value: string;
  mode?: TextAreaType;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  isValid?: boolean;
  id: string;
  name: string;
}

type TextAreaMatchType = { type: 'valid' } | { type: 'default' };

export const TextArea = ({
  mode = 'default',
  value,
  id,
  name,
  onChange,
  placeholder,
  isValid = true,
}: TextAreaProps) => {
  const textareaMatch: TextAreaMatchType = { type: mode };
  const TextAreaContent = match(textareaMatch)
    .with({ type: 'valid' }, () => (
      <S.TextArea
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
