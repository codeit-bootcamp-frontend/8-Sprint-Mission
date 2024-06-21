import styled from 'styled-components';
import { PATH_GOOGLE, PATH_KAKAO } from ' constants/paths';
import { Link } from 'react-router-dom';
import Image from 'components/@shared/Image';
import googleImg from 'assets/images/auth/social-login-google.png';
import kakaoImg from 'assets/images/auth/social-login-kakao.png';

function SocialLogin() {
  return (
    <StyledSocialLoginSection>
      <span>간편 로그인하기</span>
      <StyledSocialLoginButtonsWrapper>
        <Link to={PATH_GOOGLE}>
          <Image src={googleImg} alt={'구글 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
        </Link>
        <Link to={PATH_KAKAO}>
          <Image src={kakaoImg} alt={'카카오 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
        </Link>
      </StyledSocialLoginButtonsWrapper>
    </StyledSocialLoginSection>
  );
}

export default SocialLogin;

const StyledSocialLoginSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.4rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: var(--cool-blue);

  padding: 0 2.3rem;

  & span {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
  }
`;

const StyledSocialLoginButtonsWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  height: 4.2rem;
`;
