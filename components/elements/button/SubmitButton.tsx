import cn from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = {
  isActive: boolean;
  className?: string;
};

function SubmitButton({
  children,
  className = '',
  isActive,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={cn(
        'rounded-[8px] bg-secondary-400 px-[23px] py-[11.5px] text-[16px] font-semibold leading-[19.09px] text-white',
        isActive && 'bg-primary-100',
        className
      )}
      type="submit"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
