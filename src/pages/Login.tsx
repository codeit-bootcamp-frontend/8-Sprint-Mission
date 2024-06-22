import { PATH_SIGNUP } from ' constants/paths';
import AuthLogo from 'components/auth/AuthLogo';
import MemberCheck from 'components/auth/MemberCheck';
import SocialLogin from 'components/auth/SocialLogin';
import LoginForm from 'components/auth/login/LoginForm';
import { StyledAuthContainer, StyledAuthMain } from 'styles/@shared/auth/containerStyles';

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
