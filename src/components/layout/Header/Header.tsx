import styles from './Header.module.scss';

import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import imgPandaMarketLogo from '@assets/images/logo/logo.svg';
import imgProfile from '@assets/images/icons/ic_profile.svg';
import { useAuthStore } from '@store/useAuthStore';
import UIButton from '@core/ui/buttons/UIButton/UIButton';
import { useEffect, useState } from 'react';
import useLogin from '@lib/hooks/auth/useLogin';

const Header = ({}) => {
  const { pathname, push } = useRouter();
  const { accessToken } = useAuthStore();
  const { logout } = useLogin();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [accessToken]);

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
      {isClient && accessToken && (
        <div className={styles['navbar__right']}>
          <Link
            href="/addboard"
            id="login-link-button"
            className="button navbar__login-link-button"
          >
            <Image
              className={styles['navbar__profile']}
              src={imgProfile}
              alt="프로필"
            />
          </Link>
          <UIButton
            className={styles['navbar__profile']}
            type="box"
            handleClick={logout}
          >
            로그아웃
          </UIButton>
        </div>
      )}
      {isClient && !accessToken && (
        <div id="login-link-button" className="navbar__login-link-button">
          <UIButton
            className={styles['navbar__profile']}
            type="box"
            handleClick={() => {
              push('login');
            }}
          >
            로그인
          </UIButton>
        </div>
      )}
    </header>
  );
};

export default Header;
