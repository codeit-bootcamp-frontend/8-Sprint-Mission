import { ReactNode } from 'react';
import Header from './Header';
import { useRouter } from 'next/router';

type layout = {
  children: ReactNode;
};

function Layout({ children }: layout) {
  const router = useRouter();
  const isAuthPage = router.pathname === ('/login' || '/signup');

  return (
    <>
      {!isAuthPage && <Header />}
      <main style={!isAuthPage ? { marginTop: 'var(--header-height)' } : {}}>{children}</main>
    </>
  );
}

export default Layout;
