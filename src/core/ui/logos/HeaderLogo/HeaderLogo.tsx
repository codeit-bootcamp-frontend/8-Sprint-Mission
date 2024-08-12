import Link from 'next/link';
import { UImage } from '../../UImage/UImage';
import Logo from '@/src/assets/images/logo/logo.svg';

import styles from './HeaderLogo.module.scss';

export const HeaderLogo = ({}) => {
  return (
    <>
      <Link className={styles.logo} href="/">
        <Logo />
        <div className={styles.logoText}>판다마켓</div>
      </Link>
    </>
  );
};
