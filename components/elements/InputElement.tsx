import cn from '@/lib/utils';
import React, { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  className?: string;
  placeholder: string;
};

function InputElement({
  value,
  onChange,
  name,
  className,
  placeholder,
}: Props) {
  return (
    <input
      id={name}
      name={name}
      className={cn(
        'w-full rounded-[8px] bg-secondary-100 py-[6px] pl-10 pr-4 placeholder:font-lg-16px-regular',
        className
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default InputElement;
