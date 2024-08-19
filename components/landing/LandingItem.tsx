import cn from '@/lib/utils';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Props = {
  src: string;
  badge: string;
  title: string;
  align?: 'start' | 'end';
};

function LandingItem({
  children,
  src,
  badge,
  title,
  align = 'start',
}: PropsWithChildren<Props>) {
  return (
    <div className={`w-full items-${align}`}>
      <div className={`flex flex-col items-${align}`}>
        <div className="relative aspect-[4/3] w-full">
          <Image fill src={src} alt="landing" />
        </div>
        <h2 className="mt-[24px] text-primary-100 font-lg-16px-bold tablet:font-2lg-18px-bold">
          {badge}
        </h2>
        <h3 className="mt-2 text-secondary-700 font-2xl-24px-bold tablet:mt-4 tablet:font-3xl-32px-bold">
          {title}
        </h3>
        <p
          className={cn(
            'mt-4 flex flex-col text-secondary-700 font-lg-16px-medium tablet:mt-6 tablet:font-2lg-18px-medium',
            `items-${align}`
          )}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

export default LandingItem;
