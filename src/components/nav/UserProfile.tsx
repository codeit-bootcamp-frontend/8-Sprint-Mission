import UserProfileImg from '../../core/assets/images/profile/defaultProfile.png';

import * as S from './styles';

const UserProfile = () => {
  return <S.ProfileImg src={UserProfileImg} alt="유저 프로필" />;
};

export default UserProfile;
