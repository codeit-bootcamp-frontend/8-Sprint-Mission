import Image from 'components/@shared/Image';
import styled from 'styled-components';
import googleImg from 'assets/images/auth/social-login-google.png';
import kakaoImg from 'assets/images/auth/social-login-kakao.png';
import LoginForm from './LoginForm';

function AuthMain() {
  return (
    <_AuthMain>
      <LoginForm />
      <_SocialLoginSection>
        <div className="social-auth-label">간편 로그인하기</div>
        <div className="social-auth-buttons">
          <button className="social-auth-button">
            <Image src={googleImg} alt={'구글 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
          </button>
          <button className="social-auth-button">
            <Image src={kakaoImg} alt={'카카오 소셜 로그인 이미지'} height={'100%'} width={'100%'} />
          </button>
        </div>
      </_SocialLoginSection>

      <_MemberCheckSection>
        <span>판다마켓이 처음이신가요?</span>
        <a href="../signup">회원가입</a>
      </_MemberCheckSection>
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

const _SocialLoginSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 7.4rem;
  width: 100%;
  border-radius: 0.8rem;
  background-color: var(--cool-blue);

  padding: 0 2.3rem;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  & .social-auth-buttons {
    display: flex;
    gap: 1.6rem;
    height: 4.2rem;
  }
`;

const _MemberCheckSection = styled.section`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.79rem;
  text-align: center;

  & a {
    color: var(--hyper-blue);
    text-decoration: underline;
    margin-left: 0.4rem;
  }
`;
