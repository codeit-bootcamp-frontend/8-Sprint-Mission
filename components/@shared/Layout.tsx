import classNames from 'classnames';
import Header from './Header';
import styles from './Layout.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={classNames(styles.mainContainer)}>{children}</main>
    </>
  );
}

export default Layout;
