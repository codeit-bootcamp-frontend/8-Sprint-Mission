import { PATH_LOGIN } from ' constants/paths';
import SignupForm from 'components/auth/signup/ SignupForm';
import { StyledAuthContainer, StyledAuthMain } from './Login';
import AuthLogo from 'components/auth/AuthLogo';
import SocialLogin from 'components/auth/SocialLogin';
import MemberCheck from 'components/auth/MemberCheck';

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
