import styles from './Header.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import imgPandaMarketLogo from '@/src/assets/images/logo/logo.svg';
import Image from 'next/image';

const Header = ({}) => {
  const { pathname } = useRouter();

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <a href="/">
          <Image
            className={styles.navbar__homeLogo}
            src={imgPandaMarketLogo}
            alt="판다마켓 홈"
          />
        </a>
        <nav className={styles.navbar__menu}>
          <ol>
            <li
              className={clsx(styles.navbar__menuItem, {
                [styles['navbar__menuItem--active']]: pathname === '/boards',
              })}
            >
              <Link href={'/boards'}>자유게시판</Link>
            </li>
            <li
              className={clsx(styles.navbar__menuItem, {
                [styles['navbar__menuItem--active']]: pathname === '/items',
              })}
            >
              <Link href={'/items'}>중고마켓</Link>
            </li>
          </ol>
        </nav>
      </div>
      <a href="/signin" id="login-link-button" className="button">
        로그인
      </a>
    </header>
  );
};

export default Header;
