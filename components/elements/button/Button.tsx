import cn from '@/lib/utils';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  className?: string;
  isSubmitButton?: boolean;
};

function Button({
  children,
  isSubmitButton = false,
  onClick,
  disabled,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <button
      type={isSubmitButton ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex items-center gap-2 rounded-full bg-primary-100 px-12 py-3 text-white font-2lg-18px-semibold',
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
