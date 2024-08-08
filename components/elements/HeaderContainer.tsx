import Image from 'next/image';
import { PropsWithChildren } from 'react';

function HeaderContainer({ children }: PropsWithChildren) {
  return (
    <div className="tablet:mx-[24px] desktop:mx-auto mx-[16px] flex max-w-[1120px] items-center justify-between gap-[8px]">
      <Image width={81} height={40} src="/logo/logo_mobile.png" alt="logo" />
      <div className="font-lg-16px-bold tablet:font-2lg-18px-bold flex grow gap-[8px]">
        {children}
      </div>
      <Image width={40} height={40} src="/initial_profile.png" alt="profile" />
    </div>
  );
}

export default HeaderContainer;
