import Header from '@/components/Header';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function NavLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header>
        <Link className="text-primary-100" href="/boards">
          자유게시판
        </Link>
        <Link className="text-blue" href="/items">
          중고마켓
        </Link>
      </Header>
      {children}
    </>
  );
}

export default NavLayout;
