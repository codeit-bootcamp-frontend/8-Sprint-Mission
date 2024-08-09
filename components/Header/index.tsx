import { PropsWithChildren } from 'react';
import Image from 'next/image';
import VerticalDivider from '@/components/elements/VerticalDivider';

function Header({ children }: PropsWithChildren) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="px-[16px] py-[15px]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-[8px]">
          <Image
            width={81}
            height={40}
            src="/logo/logo_mobile.png"
            alt="logo"
          />
          <div className="flex grow gap-[8px] font-lg-16px-bold">
            {children}
          </div>
          <Image
            width={40}
            height={40}
            src="/initial_profile.png"
            alt="profile"
          />
        </div>
      </div>
      <VerticalDivider />
    </header>
  );
}

export default Header;
