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
    <div className={`flex flex-col items-${align}`}>
      <Image width={344} height={259} src={src} alt="landing" />
      <h2 className="mt-[24px] text-primary-100 font-lg-16px-bold">{badge}</h2>
      <h3 className="mt-[8px] text-secondary-700 font-2xl-24px-bold">
        {title}
      </h3>
      <p
        className={cn(
          'mt-[16px] flex flex-col text-secondary-700 font-lg-16px-medium',
          `items-${align}`
        )}
      >
        {children}
      </p>
    </div>
  );
}

export default LandingItem;
