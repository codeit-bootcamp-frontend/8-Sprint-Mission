import cn from '@/lib/utils';
import React, { MouseEventHandler, PropsWithChildren } from 'react';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function Button({
  children,
  onClick,
  className = '',
}: PropsWithChildren<Props>) {
  return (
    <button
      type="button"
      onClick={onClick}
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
