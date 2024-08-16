import Link from 'next/link';

import * as S from './LinkMedium.style';

interface LinkMediumProps {
  href: string;
  children: React.ReactNode;
}

export const LinkMedium = ({ children, href }: LinkMediumProps) => {
  return (
    <Link href={href}>
      <S.LinkButton>{children}</S.LinkButton>
    </Link>
  );
};
