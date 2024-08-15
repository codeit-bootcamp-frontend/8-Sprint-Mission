import { BTN_SMALL } from '@/f_shared/config';

import * as S from './LinkSmall.style';
import Link from 'next/link';

type btnStyle = 'outline' | 'default';
type btnSize = '40' | '48';

interface LinkSmallProps {
  children: React.ReactNode;
  $size: btnSize;
  $style: btnStyle;
  targetHref: string;
}

export const LinkSmall = ({
  children,
  $size,
  $style,
  targetHref,
}: LinkSmallProps) => {
  const { size, color, bgColor, border } = BTN_SMALL[$size][$style];
  return (
    <Link href={targetHref}>
      <S.LinkButton
        $size={size}
        $color={color}
        $bgColor={bgColor}
        $border={border}
      >
        {children}
      </S.LinkButton>
    </Link>
  );
};
