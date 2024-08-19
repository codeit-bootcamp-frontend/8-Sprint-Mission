import { ReactNode } from 'react';
import s from './UI.module.scss';
import GNB from './layout/GNB';
import { useRouter } from 'next/router';

type layout = {
  children: ReactNode;
};

function UI({ children }: layout) {
  const router = useRouter();
  const isAuthPage = router.pathname === ('/login' || '/signup');

  return (
    <>
      {!isAuthPage && <GNB />}
      <main className={!isAuthPage ? s.main : s.auth}>{children}</main>
    </>
  );
}

export default UI;
