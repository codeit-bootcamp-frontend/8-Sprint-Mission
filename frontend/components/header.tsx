import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href='/' aria-label='홈으로'>
        <Image className='logo-base' src='logo.svg' alt='판다마켓' width={52} height={53} />
        <Image className='logo-sm' src='logo-typo.svg' alt='판다마켓' width={103} height={51} />
        <Image className='logo-md' src='logo-md.svg' alt='판다마켓' width={153} height={51} />
      </Link>
      <nav aria-label='메인 네비게이션'>
        <ul>
          <li>
            <Link href='/board'>자유게시판</Link>
          </li>
          <li>
            <Link href='/market'>중고 마켓</Link>
          </li>
        </ul>
      </nav>
      <Link href='/login'>로그인</Link>
    </header>
  );
}
