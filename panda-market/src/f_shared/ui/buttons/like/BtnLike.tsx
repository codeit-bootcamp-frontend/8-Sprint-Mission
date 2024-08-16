import { useState } from 'react';
import { IconLike } from '../../icon';

import * as S from './BtnLike.style';

interface BtnLikeProps {
  btnSize?: S.LikeBtnSize;
  likeCount: number;
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isLike?: boolean;
}

export const BtnLike = ({
  btnSize = 'large',
  likeCount,
  onClick,
  isLike = false,
}: BtnLikeProps) => {
  const [isActive, setIsActive] = useState<boolean>(isLike);

  return (
    <S.Button onClick={onClick} $size={btnSize}>
      <S.ButtonContent>
        <S.ButtonContentIcon $size={btnSize}>
          <IconLike isLike={isActive} />
        </S.ButtonContentIcon>
        <S.ButtonContentText>{likeCount}</S.ButtonContentText>
      </S.ButtonContent>
    </S.Button>
  );
};
