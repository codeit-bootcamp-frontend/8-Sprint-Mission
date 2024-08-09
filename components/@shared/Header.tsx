import Button from './Button';
import Link from 'next/link';
import { PATH_LOGIN } from '@/constants/paths';
import classNames from 'classnames';
import styles from './Header.module.scss';
import dynamic from 'next/dynamic';

// window 객체가 서버사이드 렌더링 시에는 없기 때문
const HeaderLinkSection = dynamic(() => import('./HeaderLinkSection'), {
  ssr: false,
});

function Header() {
  return (
    <header className={classNames(styles.header)}>
      <div>
        <HeaderLinkSection />
      </div>
      <Link href={PATH_LOGIN}>
        <Button category={'large'}>로그인</Button>
      </Link>
    </header>
  );
}

export default Header;
