import { PATH_LOGIN } from ' constants/paths';
import AuthContainer from 'components/auth/AuthContainer';
import SignupForm from 'components/auth/signup/ SignupForm';

function Signup() {
  return (
    <AuthContainer memberCheckText={'이미 회원이신가요?'} linkTo={PATH_LOGIN} linkText={'로그인'}>
      <SignupForm />
    </AuthContainer>
  );
}

export default Signup;
