import styled from 'styled-components';
import SocialLogin from './SocialLogin';
import MemberCheck from './MemberCheck';
import Image from 'components/@shared/Image';
import googleImg from 'assets/images/auth/social-login-google.png';
import kakaoImg from 'assets/images/auth/social-login-kakao.png';
import { Link } from 'react-router-dom';
import { PATH_GOOGLE, PATH_KAKAO } from ' constants/paths';
import { ReactNode } from 'react';

interface AuthMainProps {
  children: ReactNode;
  memberCheckText: string;
  linkTo: string;
  linkText: string;
}

function AuthMain({ children, memberCheckText, linkTo, linkText }: AuthMainProps) {
  return (
    <_AuthMain>
      {children}

      <SocialLogin>
        <Link to={PATH_GOOGLE}>
          <Image src={googleImg} alt={'구글 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
        </Link>
        <Link to={PATH_KAKAO}>
          <Image src={kakaoImg} alt={'카카오 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
        </Link>
      </SocialLogin>

      <MemberCheck>
        <span>{memberCheckText}</span>
        <Link to={linkTo}>{linkText}</Link>
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
