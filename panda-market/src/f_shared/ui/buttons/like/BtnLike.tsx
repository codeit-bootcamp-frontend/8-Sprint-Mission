import { IconLike } from '../../icon';

import * as S from './BtnLike.style';

interface BtnLikeProps {
  likeCount: number;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isLike?: boolean;
}

export const BtnLike = ({
  likeCount,
  onClick,
  isLike = false,
}: BtnLikeProps) => {
  return (
    <S.Button onClick={onClick}>
      <S.ButtonContent>
        <S.ButtonContentIcon>
          <IconLike isLike={isLike} />
        </S.ButtonContentIcon>
        <S.ButtonContentText>{likeCount}</S.ButtonContentText>
      </S.ButtonContent>
    </S.Button>
  );
};
