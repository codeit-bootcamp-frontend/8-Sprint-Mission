import styled from 'styled-components';
import LoginForm from './login/LoginForm';
import SocialLogin from './SocialLogin';
import MemberCheck from './MemberCheck';
import Image from 'components/@shared/Image';
import googleImg from 'assets/images/auth/social-login-google.png';
import kakaoImg from 'assets/images/auth/social-login-kakao.png';
import { Link } from 'react-router-dom';
import { PATH_GOOGLE, PATH_KAKAO } from ' constants/paths';
import { PATH_SIGNUP } from ' constants/paths';

function AuthMain() {
  return (
    <_AuthMain>
      <LoginForm />

      <SocialLogin>
        <Link to={PATH_GOOGLE}>
          <Image src={googleImg} alt={'구글 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
        </Link>
        <Link to={PATH_KAKAO}>
          <Image src={kakaoImg} alt={'카카오 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
        </Link>
      </SocialLogin>

      <MemberCheck>
        <span>판다마켓이 처음이신가요?</span>
        <Link to={PATH_SIGNUP}>회원가입</Link>
      </MemberCheck>
    </_AuthMain>
  );
}

export default AuthMain;

const _AuthMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;
`;
