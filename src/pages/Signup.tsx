import { PATH_LOGIN } from ' constants/paths/paths';
import SignupForm from 'components/auth/signup/ SignupForm';
import AuthLogo from 'components/auth/AuthLogo';
import SocialLogin from 'components/auth/SocialLogin';
import MemberCheck from 'components/auth/MemberCheck';
import { StyledAuthContainer, StyledAuthMain } from 'styles/market/auth/containerStyles';

function Signup() {
  return (
    <StyledAuthContainer>
      <AuthLogo />
      <StyledAuthMain>
        <SignupForm />
        <SocialLogin />
        <MemberCheck memberCheckText={'이미 회원이신가요?'} linkTo={PATH_LOGIN} linkText={'로그인'} />
      </StyledAuthMain>
    </StyledAuthContainer>
  );
}

export default Signup;
