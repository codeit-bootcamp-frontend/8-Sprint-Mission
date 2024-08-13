import Image from 'next/image';
import Link from 'next/link';
import NAVIGATION_LIST from '@/utils/NAVIGATION_LIST';
import styles from './Header.module.css';

const navList = NAVIGATION_LIST.map(list => (
  <li key={list.name}>
    <Link href={list.path}>{list.name}</Link>
  </li>
));

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainHeader}>
        <div className={styles.headerNav}>
          <div className={styles.logoBox}>
            <Link href="/" className={styles.logo}>
              <Image fill src="/images/logo@2.png" alt="판다마켓 로고" />
            </Link>
            <Link href="/" className={styles.mobileLogo}>
              <Image
                fill
                src="/images/mobile_logo@2.png"
                alt="판다마켓 모바일 로고"
              />
            </Link>
          </div>
          <div className={styles.navList}>
            <ul>{navList}</ul>
          </div>
        </div>
        <Link href="/" className={styles.profile}>
          <Image fill src="/images/profile@2.png" alt="사용자 프로필" />
        </Link>
      </div>
    </header>
  );
}
