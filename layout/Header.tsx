import s from './Header.module.scss';
import logo from '@/public/logo/icon_logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const { pathname } = useRouter();

  function getLinkStyle(isActive: boolean) {
    return { color: isActive ? 'var(--blue)' : undefined };
  }

  return (
    <header className={s.header}>
      <Link href='/' aria-label='홈으로 이동'>
        <Image src={logo} alt='판다마켓 로고' />
      </Link>

      <nav>
        <Link href='/boards' style={getLinkStyle(pathname === '/boards')}>
          자유게시판
        </Link>

        <Link href='/items' style={getLinkStyle(pathname === ('/items' || '/additem'))}>
          중고마켓
        </Link>
      </nav>

      <Link href='/login' className={`button ${s.login}`}>
        로그인
      </Link>
    </header>
  );
}

export default Header;
