import { PATH_SIGNUP } from ' constants/paths';
import AuthContainer from 'components/auth/AuthContainer';
import LoginForm from 'components/auth/login/LoginForm';

function Login() {
  return (
    <AuthContainer memberCheckText={'판다마켓이 처음이신가요?'} linkTo={PATH_SIGNUP} linkText={'회원가입'}>
      <LoginForm />
    </AuthContainer>
  );
}

export default Login;
