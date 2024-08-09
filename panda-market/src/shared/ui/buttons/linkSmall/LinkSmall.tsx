import { BTN_SMALL } from '@/shared/config';

import * as S from './LinkSmall.style';

type btnStyle = 'outline' | 'default';
type btnSize = '40' | '48';

interface LinkSmallProps {
  children: React.ReactNode;
  $size: btnSize;
  $style: btnStyle;
}

export const LinkSmall = ({ children, $size, $style }: LinkSmallProps) => {
  const { size, color, bgColor, border } = BTN_SMALL[$size][$style];
  return (
    <S.LinkButton
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $border={border}
      href="/"
    >
      {children}
    </S.LinkButton>
  );
};
