import cn from '@/lib/utils';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Props = {
  src: string;
  align?: 'start' | 'end';
};

function LandingItem({
  children,
  src,
  align = 'start',
}: PropsWithChildren<Props>) {
  return (
    <div className={`w-full items-${align}`}>
      <div
        className={`flex flex-col items-${align} desktop:flex-row desktop:items-center desktop:gap-16 justify-${align}`}
      >
        <div className="relative aspect-[4/3] w-full desktop:h-[444px] desktop:w-[588px]">
          <Image fill src={src} alt="landing" />
        </div>
        <div
          className={cn(
            `flex flex-col items-${align}`,
            align === 'start'
              ? '*:self-start'
              : '*:items-end *:self-end desktop:-order-1'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: PropsWithChildren) {
  return (
    <h2 className="mt-[24px] text-primary-100 font-lg-16px-bold tablet:font-2lg-18px-bold">
      {children}
    </h2>
  );
}

function Title({ children }: PropsWithChildren) {
  return (
    <h3 className="mt-2 text-secondary-700 font-2xl-24px-bold tablet:mt-4 tablet:font-3xl-32px-bold desktop:flex desktop:flex-col">
      {children}
    </h3>
  );
}

type ContentProps = {
  className?: string;
};

function Content({ children, className }: PropsWithChildren<ContentProps>) {
  return (
    <p
      className={cn(
        'mt-4 flex flex-col text-secondary-700 font-lg-16px-medium tablet:mt-6 tablet:font-2lg-18px-medium',
        className
      )}
    >
      {children}
    </p>
  );
}

LandingItem.Badge = Badge;
LandingItem.Title = Title;
LandingItem.Content = Content;

export default LandingItem;
