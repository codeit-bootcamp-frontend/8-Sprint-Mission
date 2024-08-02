import Image from 'next/image';
import Link from 'next/link';

export default function NavLogo() {
  return (
    <Link href='/'>
      <Image className='logo-lg' src='logo-lg.svg' alt='판다마켓' width={198} height={66} priority />
      <Image className='logo-xl' src='logo-xl.svg' alt='판다마켓' width={396} height={132} priority />
    </Link>
  );
}
