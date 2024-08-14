import classNames from 'classnames';
import Header from './Header';
import styles from './Layout.module.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <main className={classNames(styles.mainContainer)}>{children}</main>
      </QueryClientProvider>
    </>
  );
}

export default Layout;
