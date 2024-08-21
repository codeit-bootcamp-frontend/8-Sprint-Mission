import styles from './Header.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import imgPandaMarketLogo from '@assets/images/logo/logo.svg';
import imgProfile from '@assets/images/icons/ic_profile.svg';

const Header = ({}) => {
  const { pathname } = useRouter();

  return (
    <header className={styles['navbar']}>
      <div className={styles['navbar__left']}>
        <Link href="/">
          <Image
            className={styles['navbar__homeLogo']}
            src={imgPandaMarketLogo}
            alt="판다마켓 홈"
          />
        </Link>
        <nav className={styles['navbar__menu']}>
          <Link
            href={'/boards'}
            className={clsx(styles['navbar__menuItem'], {
              [styles['navbar__menuItem--active']]: pathname === '/boards',
            })}
          >
            자유게시판
          </Link>

          <Link
            href={'/items'}
            className={clsx(styles['navbar__menuItem'], {
              [styles['navbar__menuItem--active']]: pathname === '/items',
            })}
          >
            중고마켓
          </Link>
        </nav>
      </div>
      <Link href="/signin" id="login-link-button" className="button">
        <Image
          className={styles['navbar__profile']}
          src={imgProfile}
          alt="프로필"
        />
      </Link>
    </header>
  );
};

export default Header;
