import Image from 'components/@shared/Image';
import styled from 'styled-components';
import authLogoImg from 'assets/images/auth/auth-logo.png';
import eyeOffImg from 'assets/images/auth/visibility-off.png';
import googleImg from 'assets/images/auth/social-login-google.png';
import kakaoImg from 'assets/images/auth/social-login-kakao.png';

function Login() {
  return (
    <_AuthContainer>
      <_AuthLogo>
        <Image src={authLogoImg} alt={'판다마켓 로고와 타이포'} height={'100%'} width={'100%'} />
      </_AuthLogo>

      <_AuthMain>
        <_AuthForm autoComplete="on" method="post">
          <div>
            <label htmlFor="login-email" className="auth-label">
              이메일
            </label>
            <input
              id="login-email"
              className="auth-email"
              type="email"
              name="email"
              placeholder="이메일을 입력해주세요"
              required
            />
            <small>Error Message</small>
          </div>

          <div className="auth-input-wrapper">
            <label htmlFor="login-password" className="auth-label">
              비밀번호
            </label>
            <_PasswordWrapper className="password-wrapper">
              <input
                id="login-password"
                className="auth-password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="비밀번호를 입력해주세요"
                required
              />
              <i className="password-visibility-icon">
                <Image src={eyeOffImg} alt={'눈 가림 이미지'} height={'100%'} width={'100%'} />
              </i>
            </_PasswordWrapper>
            <small>Error Message</small>
          </div>

          <button className="auth-submit-button">로그인</button>
        </_AuthForm>

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
    </_AuthContainer>
  );
}

export default Login;

const _AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 64rem;
  margin: 6rem auto 0;
`;

const _AuthLogo = styled.div`
  height: 13.2rem;
  width: 39.6rem;
  margin: 6rem auto 4rem;
  cursor: pointer;
`;

const _AuthMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;
`;

const _AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & small {
    display: none;
  }

  & .auth-label {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.148rem;
    margin-bottom: 1.6rem;
  }

  & input {
    width: 100%;
    height: 5.6rem;
    border-radius: 1.2rem;
    background-color: var(--cool-gray-100);

    padding: 0 2.4rem;

    &::placeholder {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.4rem;
      color: var(--cool-gray-400);
    }

    &:focus {
      /* 기존에 borderd없이 focus 상태에만 border를 사용하면
      없던 border가 생기면서 안쪽으로 덜컹거리게 되는 것이 보기에 좋지 않기에
      outline을 사용하였음 */
      outline: 1px solid var(--brand-blue);
    }
  }

  & .auth-submit-button {
    height: 5.6rem;
    width: 100%;
    border-radius: 4rem;
    background-color: var(--cool-gray-400);

    font-size: 2rem;
    font-weight: 600;
    line-height: 2.4rem;
    text-align: center;
    color: var(--white);
  }
`;

const _PasswordWrapper = styled.div`
  position: relative;

  .password-visibility-icon {
    position: absolute;
    right: 1.6rem;
    top: 0;
    bottom: 0;

    margin: auto 0;
    height: 2.4rem;
    width: 2.4rem;

    cursor: pointer;
  }
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
