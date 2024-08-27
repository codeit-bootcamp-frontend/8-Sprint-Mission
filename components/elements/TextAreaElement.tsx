import cn from '@/lib/utils';
import React, { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  className?: string;
  placeholder: string;
};

function TextAreaElement({
  value,
  onChange,
  name,
  className,
  placeholder,
}: Props) {
  return (
    <textarea
      id={name}
      wrap="virtual"
      name={name}
      className={cn(
        'h-[200px] w-full rounded-[8px] bg-secondary-100 py-[6px] pl-10 pr-4 placeholder:font-lg-16px-regular tablet:h-[282px]',
        className
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextAreaElement;
