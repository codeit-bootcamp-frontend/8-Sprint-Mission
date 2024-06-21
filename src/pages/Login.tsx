import { PATH_SIGNUP } from ' constants/paths';
import AuthLogo from 'components/auth/AuthLogo';
import MemberCheck from 'components/auth/MemberCheck';
import SocialLogin from 'components/auth/SocialLogin';
import LoginForm from 'components/auth/login/LoginForm';
import styled from 'styled-components';

function Login() {
  return (
    <StyledAuthContainer>
      <AuthLogo />
      <StyledAuthMain>
        <LoginForm />
        <SocialLogin />
        <MemberCheck memberCheckText={'판다마켓이 처음이신가요?'} linkTo={PATH_SIGNUP} linkText={'회원가입'} />
      </StyledAuthMain>
    </StyledAuthContainer>
  );
}

export default Login;

export const StyledAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 64rem;
  margin: 6rem auto 0;
`;

export const StyledAuthMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;
`;
