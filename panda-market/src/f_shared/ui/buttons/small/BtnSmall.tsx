import { BTN_SMALL } from '@/f_shared/config/buttons/btnSmall';

import * as S from './BtnSmall.style';

type btnStyle = 'outline' | 'default';
type btnSize = '40' | '48';

interface BtnSmallProps {
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: React.ReactNode;
  $size: btnSize;
  $style: btnStyle;
  isDisabled?: boolean;
}

export const BtnSmall = ({
  children,
  onClick,
  $size,
  $style,
  isDisabled = false,
}: BtnSmallProps) => {
  const { size, color, bgColor, border } = BTN_SMALL[$size][$style];
  return (
    <S.Button
      $size={size}
      $color={color}
      $bgColor={bgColor}
      $border={border}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </S.Button>
  );
};
