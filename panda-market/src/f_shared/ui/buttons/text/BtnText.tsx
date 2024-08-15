import { colors } from '@/f_shared/config';
import * as S from './BtnText.style';

interface BtnTextProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  textColor?: string;
}

export const BtnText = ({
  children,
  onClick,
  textColor = colors.primary[200],
}: BtnTextProps) => {
  return (
    <S.TextButton onClick={onClick} $textColor={textColor}>
      {children}
    </S.TextButton>
  );
};
