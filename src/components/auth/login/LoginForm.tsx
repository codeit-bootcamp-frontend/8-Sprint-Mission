import AuthInput from '../AuthInput';
import AuthForm from '../AuthForm';
import PasswordInput from '../PasswordInput';

function LoginForm() {
  return (
    <AuthForm buttonText={'로그인'}>
      <AuthInput htmlFor={'login-email'} label={'이메일'} validText={'이메일을 입력해주세요'}>
        <input id="login-email" type="email" name="email" placeholder="이메일을 입력해주세요" />
      </AuthInput>

      <AuthInput htmlFor={'login-password'} label={'비밀번호'} validText={'비밀번호를 입력해주세요'}>
        <PasswordInput id="login-password" name="password" autoComplete="off" placeholder="비밀번호를 입력해주세요" />
      </AuthInput>
    </AuthForm>
  );
}

export default LoginForm;
