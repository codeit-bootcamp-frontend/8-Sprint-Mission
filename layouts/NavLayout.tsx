import Header from '@/components/Header';
import cn from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

function NavLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <>
      <Header>
        <Link
          className={cn(pathname === '/boards' ? 'text-primary-100' : '')}
          href="/boards"
        >
          자유게시판
        </Link>
        <Link
          className={cn(pathname === '/items' ? 'text-primary-100' : '')}
          href="/items"
        >
          중고마켓
        </Link>
      </Header>
      {children}
    </>
  );
}

export default NavLayout;
