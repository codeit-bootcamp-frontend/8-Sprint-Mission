import Image from 'next/image';
import { PropsWithChildren } from 'react';

function HeaderContainer({ children }: PropsWithChildren) {
  return (
    <div className="mx-4 flex max-w-[1120px] items-center justify-between gap-[8px] tablet:mx-[24px] desktop:mx-auto">
      <Image width={81} height={40} src="/logo/logo_mobile.png" alt="logo" />
      <div className="flex grow gap-[8px] font-lg-16px-bold tablet:font-2lg-18px-bold">
        {children}
      </div>
      <Image width={40} height={40} src="/initial_profile.png" alt="profile" />
    </div>
  );
}

export default HeaderContainer;
