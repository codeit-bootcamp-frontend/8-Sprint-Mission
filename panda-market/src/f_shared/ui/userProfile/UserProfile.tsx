import Profile from '@/f_shared/assets/icons/ic_profile/ic_profile.svg';

import * as S from './UserProfile.style';

interface UserProfileProps {
  width: string;
  height: string;
}

export const UserProfile = ({ width, height }: UserProfileProps) => {
  return (
    <S.Wrapper $width={width} $height={height}>
      <Profile />
    </S.Wrapper>
  );
};
