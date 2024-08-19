import cn from '@/lib/utils';
import { PropsWithChildren } from 'react';

function MainContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <main
      className={cn(
        'mx-auto mb-[200px] mt-[86px] w-full max-w-[1200px]',
        className
      )}
    >
      {children}
    </main>
  );
}

export default MainContainer;
